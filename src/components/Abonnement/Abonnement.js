import React, { Component } from 'react';
import "./Abonnement.css"

class Abonnement extends Component {
    render() {
        return (
            <div>
                {this.props.info.subbed &&
                    <div className="abo">
                        <div className="diag" />
                        <form className="aboForm">
                            <h1>Tu es abonné</h1>
                            <div className="perso">
                                <h2>Informations personnelles</h2>
                                <p>Email : {this.props.info.mail}</p>
                                <p>Mot de passe : {this.props.info.mdp}</p>
                                <p>Type d'abonnement: {this.props.info.durée}</p>
                            </div>
                            <button onClick={this.props.submit}>Se désinscrire ?</button>
                        </form>
                    </div>
                }
                {!this.props.info.subbed &&
                    <div className="abo">
                        <div className="diag" />
                        <form className="aboForm">
                            <h1>S'abonner</h1>
                            <div>
                                <p>Email</p>
                                <input onChange={this.props.handleChangeMail} value={this.props.info.mail} type="email" required />
                            </div>
                            <div>
                                <p>Mot de passe</p>
                                <input onChange={this.props.handleChangeMail} value={this.props.info.mdp} type="password" required />
                            </div>
                            <div>
                                <p>Vérification du mot de passe</p>
                                <input type="password" required />
                            </div>
                            <div>
                                <p>Durée</p>
                                <select onChange={this.props.handleChangeMail} value={this.props.info.durée} id="durée" required>
                                    <option value="">Durée de l'abonnement</option>
                                    <option value="1 mois">1 mois</option>
                                    <option value="3 mois">3 mois</option>
                                    <option value="6 mois">6 mois</option>
                                    <option value="1 an">1 an</option>
                                </select>
                            </div>
                            <div>
                                <label>
                                    <input type="checkbox" required />
                                    <p>J'ai lu et j'accepte les GCU</p>
                                </label>
                            </div>
                            <button onClick={this.props.submit} >Valider</button>
                        </form>
                    </div>
                }
            </div>
        );
    }
}

export default Abonnement;
