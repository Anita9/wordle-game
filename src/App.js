import React, {useState, useEffect} from 'react'
import WordsContainer from './components/WordsContainer';
import Keyboard from './components/Keyboard';
import GameOverModal from './components/GameOverModal';

import { getWordArrayLength, isCorrectWord, chosenWord, splitWord } from './helper';
import {MAX_ATTEMPTS, MAX_WORD_LENGTH} from './Constants';
import {GAME_TITLE} from './Strings';

import './App.css';

const App = () => {

  const [selectedWord, setSelectedWord] = useState('');
  const [guessedWords, setGuessedWords] = useState([]);
  const [currentGuessedWord, setCurrentGuessedWord] = useState('');
  const [isWordCorrect, setIsWordCorrect] = useState(false);
  const [isWordIncorrect, setIsWordIncorrect] = useState(false);
  const [showGameOverModal, setShowGameOverModal] = useState(false);
  const [isWriting, setIsWriting] = useState(false);

  useEffect(() => {
    setSelectedWord(chosenWord);
  }, [selectedWord])

  const onEnter = () => {
    if (isWordCorrect || isWordIncorrect) {
      return;
    }

    const correctWord = isCorrectWord(currentGuessedWord);

    if(getWordArrayLength(currentGuessedWord) === MAX_WORD_LENGTH && guessedWords.length < MAX_ATTEMPTS && !isWordCorrect) {
      setGuessedWords([...guessedWords, currentGuessedWord]);
      setCurrentGuessedWord('');

      if (correctWord) {
        setIsWordCorrect(true);
        setShowGameOverModal(true);
      }

      if (guessedWords.length === MAX_ATTEMPTS - 1) {
        setIsWordIncorrect(true);
        setShowGameOverModal(true);
      }
    }
  }

  const onDelete = () => {
    setCurrentGuessedWord(splitWord(currentGuessedWord).slice(0, -1).join(''));
  }

  const onChar = value => {
    setIsWriting(true);
    if(getWordArrayLength(`${currentGuessedWord}${value}`) <= MAX_WORD_LENGTH && guessedWords.length < MAX_ATTEMPTS && !isWordCorrect) {
      setCurrentGuessedWord(`${currentGuessedWord}${value}`);
    }
    setTimeout(() => {setIsWriting(false)}, 150);
  }

  const onPlayAgain = () => {
    setShowGameOverModal(false);
    window.location.reload(false);
  }

  const onCancel = () => {
    setShowGameOverModal(false);
  }

  return (
    <div className='container'>
      <h1>{GAME_TITLE}</h1>
      <WordsContainer
        guessedWords={guessedWords}
        currentGuessedWord={currentGuessedWord}
        isWordCorrect={isWordCorrect}
        isWordIncorrect={isWordIncorrect}
        isWriting={isWriting}
      />
      <Keyboard
        onEnter={onEnter}
        onChar={onChar}
        onDelete={onDelete}
        guessedWords={guessedWords}
      />
      {showGameOverModal &&
        <GameOverModal
          show={showGameOverModal}
          isWordCorrect={isWordCorrect}
          isWordIncorrect={isWordIncorrect}
          selectedWord={selectedWord}
          onPlayAgain={onPlayAgain}
          onCancel={onCancel}
        />}
    </div>
  )

 
}

export default App;
