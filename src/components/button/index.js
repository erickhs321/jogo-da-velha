import React from 'react';

export default function Button(props){
  const { text, color, backgroundColor } = props;

  return (
    <button style={`color: ${color}`}>{ text }</button>
  );
}