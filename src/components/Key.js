import React from 'react'

const Key = (props) => {
  const {
    children,
    value,
    onClick
  } = props;

  const handleClick = e => {
    onClick(value);
    e.currentTarget.blur();
  }
  return (
   <button onClick={handleClick}>
    {children || value}
  </button>
  )
}

export default Key;
