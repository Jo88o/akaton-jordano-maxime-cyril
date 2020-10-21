import NavBar from "./components/NavBar/NavBar"
import Local from "./components/Local/Local"
import Abonnement from "./components/Abonnement/Abonnement"
import React, { Component } from 'react';
import "./App.css"

class App extends Component {
  state = {
    abo: false
  }
  render() {
    return (
      <div>
        <NavBar />
        <Local />
        {/*<Abonnement info={this.state} />*/}
      </div>
    );
  }
}

export default App;
