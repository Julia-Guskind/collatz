import React, { Component } from 'react';
import './box.css';

var Latex = require('react-latex');

class Box extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section class="inputs">
                <Latex>$x =$</Latex>
                <input type="number" name="num" id="num" class="box" placeholder="Enter a positive integer" min="1" required="required"/>
            </section>
        )
    }
}
export default Box;