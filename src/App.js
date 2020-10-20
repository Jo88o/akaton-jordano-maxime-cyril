import NavBar from "./components/NavBar/NavBar"
import Local from "./components/Local/Local"
import Abonnement from "./components/Abonnement/Abonnement"
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Local />
        <Abonnement />
      </div>
    );
  }
}

export default App;
