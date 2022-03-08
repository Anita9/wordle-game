import './Components.css';

const Letter = (props) => {
  const {value, status} = props;

  let letterClass = '';

  switch (true) {
    case status === 'correct':
      letterClass = 'correctLetter';
      break;
    case status === 'incorrect':
      letterClass = 'incorrectLetter';
      break;
    case status === 'misplaced':
      letterClass = 'misplasedLetter';
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