import words from './words.json';

export const getSelectedWord = () => {
  const chosenWord = words[Math.floor(Math.random() * words.length)].toUpperCase();
  console.log("%cThe correct word is: ", "color: green; font-size: 14px", chosenWord);
  return chosenWord;
}

export const isCorrectWord = word => {
  return chosenWord === word;
}

export const splitWord = word => {
  return [...word];
}

export const getWordArrayLength = word => {
  return splitWord(word).length;
}

export const getWordStatuses = word => {
  const splitChosenWord = splitWord(chosenWord);
  const splitGuessedWord = splitWord(word);

  const letterStatuses = Array.from(Array(word.length));

  const correctWordLettersTaken = splitChosenWord.map((_) => false);

  splitGuessedWord.forEach((letter, index) => {
    if(letter === splitChosenWord[index]) {
      letterStatuses[index] = 'correct';
      correctWordLettersTaken[index] = true;
      return;
    }
  })

  splitGuessedWord.forEach((letter, index) => {
    if(letterStatuses[index]) {
      return;
    }

    if(!splitChosenWord.includes(letter)) {
      letterStatuses[index] = 'incorrect';
      return;
    }

    const indexOfMisplasedLetter = splitChosenWord.findIndex((item, i) => item === letter && !correctWordLettersTaken[i]);

    if (indexOfMisplasedLetter > -1) {
      letterStatuses[index] = 'misplaced';
      return;
    }
    else {
      letterStatuses[index] = 'incorrect';
      return;
    }
  })

  return letterStatuses;
}

export const getExistingWordsStatuses = (guessedWords) => {
  const letters = {};
  const splitChosenWord = splitWord(chosenWord);

  guessedWords.forEach((word) => {
    splitWord(word).forEach((letter, index) => {
      if (!splitChosenWord.includes(letter)) {
        return (letters[letter] = 'incorrect');
      }

      if(letter === splitChosenWord[index]) {
        return (letters[letter] = 'correct');
      }

      if(letters[letter] !== 'correct') {
        return (letters[letter] = 'misplaced');
      }
    })
  })

  return letters;
}

export const chosenWord = getSelectedWord();