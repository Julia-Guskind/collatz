import './App.css';
import Box from './components/box/box.js';
import Graph from './components/graph/graph.js';
import Intro from './components/intro/intro.js';

function App() {
  return (
    <div className="App">
      <h1 className="App-header">Collatz Conjecture Interactive Graph</h1>
      <Intro></Intro>
      <Box></Box>
      <Graph></Graph>
    </div>
  );
  }

export default App;
