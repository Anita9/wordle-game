import React from 'react';
import Letter from './Letter';

import { getExistingWordsStatuses, splitWord } from '../helper';
import {MAX_WORD_LENGTH} from '../Constants';

import './Components.css';

const CurrentWord = (props) => {
  const {currentGuessedWord, guessedWords, isWriting} = props;
  const splittedWord = splitWord(currentGuessedWord);
  const emptyCells = Array.from(Array(MAX_WORD_LENGTH - splittedWord.length));

  const lettersStatuses = getExistingWordsStatuses(guessedWords);
  
  return (
    <div className='rowContainer'>
     {
       splittedWord.map((letter, index) => (
         <Letter
          key={index}
          value={letter}
          status={lettersStatuses[letter] === 'incorrect' ? lettersStatuses[letter] : null}
          isCurrentWord={true}
          isWriting={isWriting}
          splittedWord={splittedWord}
          index={index}
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