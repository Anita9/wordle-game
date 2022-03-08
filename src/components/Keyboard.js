import { useEffect } from "react";

import './Components.css';
import Key from "./Key";

const Keyboard = (props) => {
  const {
    onEnter,
    onChar,
    onDelete
  } = props;

  const onClick = value => {
    if (value === 'ENTER') {
      onEnter();
    }
    else if (value === 'DELETE') {
      onDelete();
    }
    else {
      onChar(value);
    }
  }

  useEffect(() => {
    const listener = e => {
      if (e.code === 'Enter') {
        onEnter();
      }
      else if(e.code === 'Backspace') {
        onDelete();
      }
      else {
        const key = e.key.toUpperCase();
        if(key.length === 1 && key >= 'A' && key <= 'Z') {
          onChar(key);
        }
      }
    }

    window.addEventListener('keyup', listener);
    return () => {
      window.removeEventListener('keyup', listener);
    }
  }, [onEnter, onDelete, onChar])

  const firstRow = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
  const secondRow = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
  const thirdRow = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];
  
  return (
    <div className="keyboardContainer">
      <div className="keyboardRow">
        {firstRow.map(key => (
          <Key
            value={key}
            key={key}
            onClick={onClick}
          />
        ))}
      </div>
      <div className="keyboardRow">
        {secondRow.map(key => (
          <Key
            value={key}
            key={key}
            onClick={onClick}
          />
        ))}
      </div>
      <div className="keyboardRow">
        <Key value={"ENTER"} onClick={onClick}>
          ENTER
        </Key>
        {thirdRow.map(key => (
          <Key
            value={key}
            key={key}
            onClick={onClick}
          />
        ))}
        <Key value="DELETE" onClick={onClick}>
          DELETE
        </Key>
      </div>
    </div>
  )
}

export default Keyboard;