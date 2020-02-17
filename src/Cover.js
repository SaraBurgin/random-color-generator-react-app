import React, { useState } from 'react';
import './Cover.css';

function Cover() {
  const [hidden, setHidden] = useState(false);
  return (
    <div className="Cover" hidden={hidden}>
      <h1>Random Color Generator React App</h1>
      <button
        onClick={function onClick() {
          setHidden(true);
        }}
      >
        X
      </button>
      <br />
      <hr />
      <p>
        Welcome to our color generator website <br /> where you can generate a
        random color and get the HEX code of that color.
      </p>
      <hr />
      <br />
    </div>
  );
}

export default Cover;
