import NavBar from "./components/NavBar/NavBar"
import Local from "./components/Local/Local"
import Abonnement from "./components/Abonnement/Abonnement"
import React, { Component } from 'react';
import "./App.css"

class App extends Component {
  state = {
    abo: {
      subbed: false,
      mail: "",
      mdp: "",
      durée: ""
    }
  }
  subInfo = {
    mail: "email",
    mdp: "mdp",
    durée: "type"
  }
  submit(e) {
    e.preventDefault();
    let copie = this.state.abo
    if (copie.subbed) {
      copie.subbed = !copie.subbed
    }
    else {
      copie.subbed = !copie.subbed
    }
    this.setState(copie)
  }
  render() {
    return (
      <div>
        <NavBar />
        <Local info={this.state.abo} />
        <Abonnement info={this.state.abo} submit={(e) => this.submit(e)} temp={this.subInfo} />
      </div>
    );
  }
}

export default App;
