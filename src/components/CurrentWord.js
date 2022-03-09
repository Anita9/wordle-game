import React from 'react'
import { getExistingWordsStatuses, splitWord } from '../helper';
import Letter from './Letter';

import './Components.css';

const CurrentWord = (props) => {
  const {currentGuessedWord, guessedWords} = props;
  const splittedWord = splitWord(currentGuessedWord);
  const emptyCells = Array.from(Array(6 - splittedWord.length));

  const lettersStatuses = getExistingWordsStatuses(guessedWords);
  
  return (
    <div className='rowContainer'>
     {
       splittedWord.map((letter, index) => (
         <Letter
          key={index}
          value={letter}
          status={lettersStatuses[letter] === 'incorrect' ? lettersStatuses[letter] : null}
          />
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