import React, { Component } from 'react';
import './intro.css';
import latex from './latex.png';

class Intro extends Component {

    render() {    
        return(
            <div>
                <link
                    href="//cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0/katex.min.css"
                    rel="stylesheet"
                />

                <p class="intro-title">What is the Collatz Conjecture?</p>
                <p class="intro-body">
                    It is a sequence of positive integers that is believed to always end up reaching 1.
                    The sequence is generated from the following: <br/>
                </p>
                <img src={latex} alt="" width="20%" style={{margin:"auto", paddingBottom:"100px"}}/>
                
                
                <p class="intro-title">Interactive Graph</p>
                <p class="intro-body">
                    This interactive graph visualizes how the Collatz Conjecture produces a sequence of numbers that eventually converges to 1.
                    <br/>
                    Simply enter a positive integer and press the
                    <button class="demo-button" disabled="disabled">Draw Graph</button>
                    button to see it in action! Zooming in is enabled by clicking and dragging over a desired portion of the graph.<br/>
                </p>
            </div>
        )
    }
}

export default Intro