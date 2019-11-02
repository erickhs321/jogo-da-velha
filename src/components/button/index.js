import React from 'react';
import './styles.css';

export default function Button(props){
  const { text } = props;

  return (
    <button id="button"> { text }</button>
  );
}
