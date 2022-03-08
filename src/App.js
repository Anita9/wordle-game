import React, {useState, useEffect} from 'react'
import WordsContainer from './components/WordsContainer';

import './App.css';
import { getWordArrayLength, isCorrectWord, chosenWord, splitWord } from './helper';
import Keyboard from './components/Keyboard';

const App = () => {

  const [selectedWord, setSelectedWord] = useState('');
  const [guessedWords, setGuessedWords] = useState([]);
  const [currentGuessedWord, setCurrentGuessedWord] = useState('');
  const [isWordCorrect, setIsWordCorrect] = useState(false);
  const [isWordIncorrect, setIsWordIncorrect] = useState(false)

  useEffect(() => {
    setSelectedWord(chosenWord);
  }, [selectedWord])

  const onEnter = () => {
    if (isWordCorrect || isWordIncorrect) {
      return;
    }

    const correctWord = isCorrectWord(currentGuessedWord);

    if(getWordArrayLength(currentGuessedWord) === 6 && guessedWords.length < 7 && !isWordCorrect) {
      setGuessedWords([...guessedWords, currentGuessedWord]);
      setCurrentGuessedWord('');

      if (correctWord) {
        setIsWordCorrect(true)
        setTimeout(() => {alert('Congratulations! You won!')}, 300);
      }

      if (guessedWords.length === 6) {
        setIsWordIncorrect(true)
        setTimeout(() => {alert(`You didn't guess the word.`)}, 300);
      }
    }
  }

  const onDelete = () => {
    setCurrentGuessedWord(splitWord(currentGuessedWord).slice(0, -1).join(''));
  }

  const onChar = value => {
    if(getWordArrayLength(`${currentGuessedWord}${value}`) <= 6 && guessedWords.length < 7 && !isWordCorrect) {
      setCurrentGuessedWord(`${currentGuessedWord}${value}`);
    }
  }

  console.log('selectedword ', selectedWord);

  return (
    <div className='container'>
      <h1>The Wordle Game</h1>
      <WordsContainer
        guessedWords={guessedWords}
        currentGuessedWord={currentGuessedWord}
        isWordCorrect={isWordCorrect}
        isWordIncorrect={isWordIncorrect}
      />
      <Keyboard
        onEnter={onEnter}
        onChar={onChar}
        onDelete={onDelete}
        guessedWords={guessedWords}
      />
    </div>
  )

 
}

export default App;
