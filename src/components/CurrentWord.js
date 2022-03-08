import React from 'react'
import { splitWord } from '../helper';
import Letter from './Letter';

import './Components.css';

const CurrentWord = (props) => {
  const {currentGuessedWord} = props;
  const splittedWord = splitWord(currentGuessedWord);
  const emptyCells = Array.from(Array(6 - splittedWord.length));
  
  return (
    <div className='rowContainer'>
     {
       splittedWord.map((letter, index) => (
         <Letter key={index} value={letter}/>
       ))
     }
     {
       emptyCells.map((_, index) => (
         <Letter key={index}/>
       ))
     }
    </div>
  )
}

export default CurrentWord;