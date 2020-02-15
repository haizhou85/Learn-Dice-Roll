import React, { Component } from 'react';

class Rolls extends Component{
    render(){
        return(
            <ol>
            {this.props.nums.map(value => <li>{value}</li>)}
            </ol>
        )
    }
}





export default Rolls
