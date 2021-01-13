import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  WineWork,
  PastaWork,
  Contacts,
  Main,
  CardsContainer,
  About,
  Cart,
} from "./components";
import { commerce } from "./lib/commerce";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCard = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);
    setCart(cart);
  };

  const handleUpdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, quantity);
    setCart(cart);
  };

  const handleRemoveFromCart = async (productsId) => {
    const { cart } = await commerce.cart.remove(productsId);
    setCart(cart);
  };

  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();
    setCart(cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <Router>
      <div className="app">
        <Navbar totalItems={cart.total_items} />
        <Switch>
          <Route path="/wine">
            <WineWork />
          </Route>
          <Route path="/pasta">
            <PastaWork products={products} onAddToCart={handleAddToCard} />
          </Route>
          <Route path="/cart">
            <Cart
              cart={cart}
              handleUpdateCartQty={handleUpdateCartQty}
              handleRemoveFromCart={handleRemoveFromCart}
              handleEmptyCart={handleEmptyCart}
            />
          </Route>

          <Route exact path="/">
            <Main />
            <About />
            <CardsContainer />
            <Contacts />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
