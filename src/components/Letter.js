import './Components.css';

const Letter = (props) => {
  const {
    value,
    status,
    isCurrentWord,
    isWriting,
    splittedWord,
    index
  } = props;

  let letterClass = '';

  switch (true) {
    case status === 'correct':
      letterClass = 'correctLetter';
      break;
    case status === 'incorrect':
      letterClass = isCurrentWord ? 'incorrectLetter letter-jiggle' : 'incorrectLetter';
      break;
    case status === 'misplaced':
      letterClass = 'misplasedLetter';
      break;
    case isWriting && splittedWord.length === index + 1:
      letterClass = 'initialLetter initialLetterAnimate';
      break;
    default:
      letterClass = 'initialLetter';
      break;
  }

  return (
    <div>
      <div className={`letterContainer ${letterClass}`}>
        {value}
      </div>
    </div>
  )
}

export default Letter;