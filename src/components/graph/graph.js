import React, { Component } from 'react';
import Chart from '../chart/chart.js';
import './graph.css';
import BlankChart from '../chart/blankchart.js';

class Graph extends Component {
    constructor(props) {
        super(props);
        this.clicked = this.clicked.bind(this); //
        this.state = {showChart: 0, buttonText:"Draw Graph"}; // initially do not display the chart
    }
    
    // this function toggles the state of buttonText and showChart when a user clicks the button
    clicked() {
        const num = document.getElementById("num").value;
        if(num && num>0) { // if num is not null and it is a positive integer...
            this.setState({showChart: !this.state.showChart});
            console.log(this.state.showChart)
            if (!this.state.showChart)
                this.setState({buttonText: "Erase Graph"});
            else 
                this.setState({buttonText: "Draw Graph"});
        }

    }

    render() {
        
        return(
            <div>
            <button class="custom-button" onClick={this.clicked}>{this.state.buttonText}</button>
            {this.state.showChart ? <Chart></Chart> : <BlankChart></BlankChart>}
            </div>
        )
    }
}

// References:
// Conditional Rendering onClick: https://stackoverflow.com/questions/44822341/render-react-component-onclick 

export default Graph;

// font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
// 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
 // sans-serif;