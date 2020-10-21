import React, { Component } from 'react';
import "./Navbar.css";
import 'bootstrap/dist/css/bootstrap.min.css';

class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="bg">
                    <h1 className="text-center">Hakathon</h1>
                    <ul>
                        <li>Local</li>
                        <li>Abonnements</li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default NavBar;

//COULEURS : VERT (#5dd55d)
//           BLEU (#4d79FF)