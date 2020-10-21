import React, { Component } from 'react';
import "./Navbar.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Local from "../Local/Local"
import Abonnement from "../Abonnement/Abonnement"

class NavBar extends Component {
    nav(str) {
        this.props.nav(str)
    }
    render() {
        return (
            <div>
                <nav className="bg">
                    <h1 className="text-center">Hakathon</h1>
                    <ul>
                        <li onClick={() => this.nav("local")}>Local</li>
                        <li onClick={() => this.nav("abonnement")}>Abonnements</li>
                    </ul>
                </nav>
                {this.props.currentPage === "local" &&
                    <Local info={this.props.info}/>
                }
                {this.props.currentPage === "abonnement" &&
                    <Abonnement info={this.props.info} submit={(e) => this.props.submit(e)} handleChangeMail={this.props.handleChangeMail} />
                }
            </div>
        );
    }
}

export default NavBar;

//COULEURS : VERT (#5dd55d)
//           BLEU (#4d79FF)