import React, { useState } from 'react';
import './App.css';
import Cover from './Cover.js';
import randomColor from 'randomcolor';
import Box from './Box.js';

function App() {
  const [color, setColor] = useState(randomColor());
  return (
    <div className="App">
      <Cover />
      <Box color={color} />
      <button
        onClick={function onClick() {
          setColor(randomColor());
        }}
      >
        {' '}
        Generate color
      </button>
    </div>
  );
}

export default App;
