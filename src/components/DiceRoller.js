import React, { Component } from 'react';
import one from './dicefaces/1.png';
import two from './dicefaces/2.png';
import three from './dicefaces/3.png';
import four from './dicefaces/4.png';
import five from './dicefaces/5.png';
import six from './dicefaces/6.png';

class DiceRoller extends Component{
    refresh = () => {
        window.location.reload()
    }
    diceFace = (num) => {
        let array = [one, two, three, four, five, six]
        return array[ num - 1 ]
    }
    render(){
        return(
            <div>
                <img src = { this.diceFace(this.props.rolledNum) }/>
                <button onClick = { this.props.roll }>
                Roll!!</button>
                <button onClick={ this.refresh }>Restart</button>
            </div>

        )
    }
}





export default DiceRoller
