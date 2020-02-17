import React from 'react';

function Box(props) {
  return (
    <div style={{ background: props.color }}>Hex code - {props.color}</div>
  );
}

export default Box;
