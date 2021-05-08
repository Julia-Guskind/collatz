import React, { Component } from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


class Chart extends Component {
    
    render() {
        const num = document.getElementById("num");
        console.log(num)
        const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light2", // "light1", "dark1", "dark2"
			title:{
				text: "Bounce Rate by Week of Year"
			},
			axisY: {
				title: "Bounce Rate",
				suffix: "%"
			},
			axisX: {
				title: "Week of Year",
				prefix: "W",
				interval: 2
			},
			data: [{
				type: "line",
				toolTipContent: "Week {x}: {y}%",
				dataPoints: [
					{ x: 1, y: 64 },
					{ x: 2, y: 61 },
					{ x: 3, y: 64 },
					{ x: 4, y: 62 },
					{ x: 23, y: 59 }
				]
			}]
		}
        return(
            <CanvasJSChart options={options}></CanvasJSChart>            
        )
    }

}

export default Chart;