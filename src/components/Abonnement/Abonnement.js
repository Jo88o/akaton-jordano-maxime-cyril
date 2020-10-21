import React, { Component } from 'react';
import "./Abonnement.css"

class Abonnement extends Component {
    test(e) {
        // e.preventDefault();
    }
    render() {
        console.log(this.props.info)
        return (
            <div>
                {this.props.info.abo &&
                    <div className="abo">
                        <div className="diag" />
                        <h1>
                            Abonned
                        </h1>
                    </div>
                }
                {!this.props.info.abo &&
                    <div className="abo">
                        <div className="diag" />
                        <form className="aboForm">
                            <h1>S'abonner</h1>
                            <div>
                                <p>Email</p>
                                <input type="email" required />
                            </div>
                            <div>
                                <p>Mot de passe</p>
                                <input type="password" required />
                            </div>
                            <div>
                                <p>Vérification du mot de passe</p>
                                <input type="password" required />
                            </div>
                            <div>
                                <p>Durée</p>
                                <select id="durée" required>
                                    <option value="">Durée de l'abonnement</option>
                                    <option value="1 mois">1 mois</option>
                                    <option value="3 mois">3 mois</option>
                                    <option value="6 mois">6 mois</option>
                                    <option value="1 an">1 an</option>
                                </select>
                            </div>
                            <div>
                                <input type="checkbox" required />
                                <p>S'abonner à la newsletter</p>
                            </div>
                            <button onClick={this.test}>Valider</button>
                        </form>
                    </div>
                }
            </div>
        );
    }
}

export default Abonnement;
