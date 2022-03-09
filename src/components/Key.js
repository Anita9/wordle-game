import React from 'react'

import './Components.css';

const Key = (props) => {
  const {
    children,
    value,
    onClick,
    status
  } = props;

  let keyClass = '';

  switch (true) {
    case value === 'ENTER':
      keyClass = 'enterKey'
      break;
    case value === 'DELETE':
      keyClass = 'deleteKey';
      break;
    case value !== 'ENTER' && value !== 'DELETE' && status === 'incorrect':
      keyClass = 'incorrectKey';
      break;
    default:
      keyClass = 'letterKey';
      break;
  }

  const handleClick = e => {
    onClick(value);
    e.currentTarget.blur();
  }
  return (
   <button className={`key ${keyClass}`} onClick={handleClick}>
    {children || value}
  </button>
  )
}

export default Key;
