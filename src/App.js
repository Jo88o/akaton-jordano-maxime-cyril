import NavBar from "./components/NavBar/NavBar"
import React, { Component } from 'react';
import "./App.css"

class App extends Component {
  state = {
    abo: {
      subbed: false,
      mail: "",
      mdp: "",
      durée: ""
    },
    currentPage: "local"
  }

  // Abo
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
  handleChangeMail = (e) => {
    let sub = this.state.abo
    if (e.target.type == "email") {
      sub.mail = e.target.value
    }
    else if (e.target.type == "password") {
      sub.mdp = e.target.value
    }
    else if (e.target.id == "durée") {
      sub.durée = e.target.value
    }
    this.setState(sub)
  }
  // Nav
  nav(str) {
    this.setState({
      currentPage: str
    })
  }

  render() {
    return (
      <div>
        <NavBar currentPage={this.state.currentPage} nav={(str) => this.nav(str)} info={this.state.abo} submit={(e) => this.submit(e)} handleChangeMail={(e) => this.handleChangeMail(e)} />
      </div>
    );
  }
}

export default App;
