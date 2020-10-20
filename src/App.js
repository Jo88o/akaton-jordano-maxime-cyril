import React from 'react';
import './App.css';
import NavBar from "./components/NavBar/NavBar"
import Local from "./components/Local/Local"
import Abonnement from "./components/Abonnement/Abonnement"

function App() {
  return (
    <div>
      <NavBar />
      <Local />
      <Abonnement />
    </div>
  );
}

export default App;
