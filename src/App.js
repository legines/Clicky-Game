import React, { Component } from 'react';
import Game from "./components/game/game";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Game />
        <Footer />
      </div>
    );
  }
}

export default App;
