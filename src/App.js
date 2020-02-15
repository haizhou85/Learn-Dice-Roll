import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DiceRoller from './components/DiceRoller'
import Rolls from './components/Rolls'

class App extends Component{
    constructor(props) {
        super(props)
        this.state = {
            rolledNum : 4,
            nums : []
        }
    }
    roll = () =>{
        let randomNum = Math.ceil(Math.random() * 6)
        let newNums = [randomNum ]
        this.setState({ rolledNum : randomNum, nums : this.state.nums.concat([newNums])})
    }
    

    render(){
        return(
            <div>
                <DiceRoller roll = {this.roll} rolledNum = { this.state.rolledNum }/>
                <Rolls nums = { this.state.nums }/>
            </div>
        )
    }
}

export default App;
