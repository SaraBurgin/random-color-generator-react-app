import React from 'react';

function Box(props) {
  return (
    <div
      style={{
        background: props.color,
        height: 200,
        width: 400,
        marginLeft: 300,
      }}
    >
      Hex code - {props.color}
    </div>
  );
}
export default Box;
