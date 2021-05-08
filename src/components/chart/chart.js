import React, { Component } from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


var i = 0;

function collatz(num, arr) {
    arr.push({x: i++, y: num})
    if (num === 1)
        return arr 
    if (num % 2)
        return collatz(3*num + 1, arr)
    else
        return collatz(num/2, arr)
}

class Chart extends Component {
    
    render() {
        const num = document.getElementById("num").value;
        console.log(num)
        var points = collatz(parseInt(num, 10), [])
        console.log(points)
        const options = {
			animationEnabled: true,
            animationDuration: 7000,
            zoomEnabled: true,
			theme: "light2", // "light1", "dark1", "dark2"
            backgroundColor: "#E2EFED",
            height: 600,
			axisY: {
                titleFontColor:"black",
                titleFontWeight: "bold",
                labelFontColor: "black",
                title: "Current x Value",
                minimum: 1
			},
			axisX: {
                titleFontColor:"black",
                titleFontWeight: "bold",
                title: "Number of Steps",
                labelFontColor: "black",
                minimum: 0
			},
			data: [{
				type: "line",
				toolTipContent: "Step Count={x} , x={y}",
				dataPoints: points
			}]
		}
        i = 0;
        return(
            <div style={{width:"85%", margin:"auto", padding:"50px", boxShadow:"10px 10px 10px grey", border:"solid grey"}}>
            <CanvasJSChart options={options}></CanvasJSChart> 
            </div>
        )
    }

}

export default Chart;