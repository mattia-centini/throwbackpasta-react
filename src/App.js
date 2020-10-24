import React from 'react';
import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import About from './components/About'
import CardsContainer from './components/CardsContainer'

function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <About />
      <CardsContainer />
      
      {/* 
          main
          about
          workshops
          contacts
      */}
      {/*  */}
    </div>
  );
}

export default App;
