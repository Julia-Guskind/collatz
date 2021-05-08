import React, { Component } from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class BlankChart extends Component {
    
    render() {
        const options = {
			animationEnabled: false,
            zoomEnabled: false,
			theme: "light2", // "light1", "dark1", "dark2"
            backgroundColor: "#E2EFED",
            height: 600,
			axisY: {
                titleFontColor:"black",
                titleFontWeight: "bold",
                labelFontColor: "black",
                title: "Current x Value",
                minimum: 0
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
			}]
		}
        return(
            <div style={{width:"85%", margin:"auto", padding:"50px", boxShadow:"10px 10px 10px grey", border:"solid grey"}}>
            <CanvasJSChart options={options}></CanvasJSChart> 
            </div>
        )
    }

}

export default BlankChart;