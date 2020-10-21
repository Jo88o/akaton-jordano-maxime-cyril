import React, { Component, createElement, useRef } from 'react';
import './Local.css'

const A = () => {
    let myInput = document.getElementsByTagName('input')[0];
    return <div>{myInput.value}</div>
}

class Local extends Component {
    myFunc(e) {
        /*e.preventDefault();*/
        this.setState({
            test: [...this.state.test, <A />]
        })
    }

    state = {
        test: []
    }

    render() {
        return (
            <div className='div1'>
                <div className='div2'>
                    <h1 className='h1'>Que voulez-vous ranger dans le local ? </h1>
                    <input className='inputDiv2' type="text" />
                    <button className='buttonDiv2' onClick={(e) => this.myFunc(e)}>ajouter</button>
                    
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
