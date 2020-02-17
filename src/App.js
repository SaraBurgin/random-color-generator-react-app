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
        style={{
          display: 'block',
          marginTop: -170,
          marginLeft: 760,
          fontSize: 20,
          color: 'white',
          backgroundColor: 'gray',
          marginRight: -300,
          borderRadius: 100,
          padding: 50,
          marginBottom: 100,
        }}
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
