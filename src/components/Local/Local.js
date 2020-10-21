import React, { Component, createElement, useRef } from 'react';
import App from '../../App';
import './Local.css'

const A = () => {
    let myInput = document.getElementsByTagName('input')[0];
    return <div className='nvlDiv'><p className='nvP'>{myInput.value}</p><button className='nvButton' onClick={(e) => e.target.parentNode.style = 'display: none;'}></button></div>
}

class Local extends Component {
    componentDidMount() {
        let subbed = this.props.info.subbed
        let myInput = document.getElementsByTagName('input')[0];
        let btn = document.getElementsByTagName("button")[0]
        btn.addEventListener("click", () => {
            if (myInput.value != '') {
                this.setState({
                    test: [...this.state.test, <A />]
                });

            } else if (myInput.value == ''){
                alert('veuillez entrez quelque chose')
            }
            myInput.value = ''
        })
    }

    state = {
        test: []
    }

    render() {
        let subbed = this.props.info.subbed
        
        return (
            <div className='div1'>
                {subbed &&
                <div className ='divAbo'>
                    abonné
                </div>
                }
                {!subbed &&
                <div className = 'divPasAbo'>
                    pas abonné
                </div>
                }
                <div className='div2'>
                    <h1 className='h1'>Que voulez-vous ranger dans le local ? </h1>
                    <input className='inputDiv2' type="text" />
                    <button className='buttonDiv2'>ajouter</button>

                </div>
                <div className='div3'>
                    <h1 className='h1'>Mon Local</h1>
                    {this.state.test}
                </div>
            </div>
        );
    }
}

export default Local;
