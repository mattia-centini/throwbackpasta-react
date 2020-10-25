import React from 'react';
import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import About from './components/About'
import CardsContainer from './components/CardsContainer'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PastaWork from './components/PastaWork'
import WineWork from './components/WineWork'


function App() {
  return (
    <div className="app">
      <Router>
        <Switch>

          <Route path="/wine">
            <WineWork/>
          </Route>

          <Route path="/pasta">
            <PastaWork />
          </Route>

          <Route exact path="/">
              <Header />
              <Main />
              <About />
              <CardsContainer />
          </Route>

        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
