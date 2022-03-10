import CompletedWord from './CompletedWord';
import CurrentWord from './CurrentWord';

import './Components.css';

const WordsContainer = (props) => {
  const {
    guessedWords,
    currentGuessedWord,
    isWordCorrect,
    isWordIncorrect,
    isWriting
  } = props;

  return (
    <div className='wordsContainer'>
    {
      guessedWords.map((word, index) => (
        <CompletedWord
          key={index}
          guessedWord={word}
        />
      ))
    }
    {
      guessedWords.length < 7 && !isWordCorrect && !isWordIncorrect && (
        <CurrentWord
          currentGuessedWord={currentGuessedWord}
          guessedWords={guessedWords}
          isWriting={isWriting}
        />
      )
    }
    </div>
  )
}

export default WordsContainer;