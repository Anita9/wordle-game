import { splitWord, getWordStatuses } from '../helper';
import Letter from './Letter';

const CompletedWord = (props) => {

  const {guessedWord} = props;

  const splittedWord = splitWord(guessedWord);
  const statuses = getWordStatuses(guessedWord);

  return (
    <div className='rowContainer'>
      {
        splittedWord.map((letter, index) => (
          <Letter
            key={index}
            value={letter}
            status={statuses[index]}
            isCompleted
          />
        ))
      }
    </div>
  )
}

export default CompletedWord;