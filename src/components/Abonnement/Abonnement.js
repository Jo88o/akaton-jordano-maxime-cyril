import React, { Component } from 'react';
import "./Abonnement.css"

class Abonnement extends Component {
    submit(e) {
        e.preventDefault()
        // let inputMail = document.getElementsByTagName("input")[0]
        // this.props.hey.push(inputMail.value)
    }
    state = {
        info: this.props.temp
    }
    componentDidMount() {
        let btn = document
    }
    render() {
        return (
            <div>
                {this.state.info.mail}
                {this.props.info.subbed &&
                    <div className="abo">
                        <div className="diag" />
                        <form className="aboForm">
                            <h1>Tu es abonné</h1>
                            <h2>Informations personnelles</h2>
                            <p>Email : {this.state.info.mail}</p>
                            <p>Mot de passe : {this.state.info.mdp}</p>
                            <p>Type d'abonnement: {this.state.info.durée}</p>
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
                                <input type="email" />
                            </div>
                            <div>
                                <p>Mot de passe</p>
                                <input type="password" />
                            </div>
                            <div>
                                <p>Vérification du mot de passe</p>
                                <input type="password" />
                            </div>
                            <div>
                                <p>Durée</p>
                                <select id="durée" >
                                    <option value="">Durée de l'abonnement</option>
                                    <option value="1 mois">1 mois</option>
                                    <option value="3 mois">3 mois</option>
                                    <option value="6 mois">6 mois</option>
                                    <option value="1 an">1 an</option>
                                </select>
                            </div>
                            <div>
                                <label>
                                    <input type="checkbox" />
                                    <p>J'ai lu et j'accepte les GCU</p>
                                </label>
                            </div>
                            <button onClick={this.props.submit} >Valider</button>
                            {/* onClick={(e) => {
                                let inputMail = document.getElementsByTagName("input")[0]
                                this.props.hey.push(inputMail.value)
                                console.log(this.props.hey); e.preventDefault()
                            }} */}
                        </form>
                    </div>
                }
            </div>
        );
    }
}

export default Abonnement;
