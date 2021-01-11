import React from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";
import CardsContainer from "./components/CardsContainer";
import Contacts from "./components/Contacts";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PastaWork from "./components/PastaWork";
import WineWork from "./components/WineWork";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/wine">
            <WineWork />
          </Route>
          <Route path="/navbar">
            <Navbar />
          </Route>

          <Route path="/pasta">
            <PastaWork />
          </Route>

          <Route exact path="/">
            <Navbar />
            <Main />
            <About />
            <CardsContainer />
            <Contacts />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
