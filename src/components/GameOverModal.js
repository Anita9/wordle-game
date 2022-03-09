import React from 'react'
import GameWonStickman from '../img/gamewonstickman.jpg';
import GameLostStickman from '../img/gameloststickman.jpg';

import './Components.css';

const GameOverModal = (props) => {
  const {
    show,
    selectedWord,
    isWordCorrect,
    isWordIncorrect,
    onPlayAgain,
    onCancel
  } = props;

  return (
    <div>
      <div
        className='modalWrapper'
        style={{transform: show ? 'translateY(0vh)' : 'translateY(-100vh)', opacity: show ? 1 : 0 }}
      >
        <div className='modalBody'>
          {isWordCorrect && (
            <div>
              <img src={GameWonStickman} alt='Game won stickman'/>
              <div className='modalTextWrapper'>
                <h3 className='modalTitleCorrect'>You're on fire!</h3>
                <span className='spanFontBold'>You won!</span>
                <span className='spanFont13'>Now go ahead and click that Play again button.</span>
                <span className='spanFont13'>I'm sure I can beat you this time.</span>
              </div>
            </div>
          )}
          {isWordIncorrect && (
            <div>
            <img src={GameLostStickman} alt='Game lost stickman'/>
              <div className='modalTextWrapper'>
                <h3 className='modalTitleIncorrect'>Nah, that wasn't it.</h3>
                <span className='spanFontBold'>The word was <span id='selectedWord'>{selectedWord}</span>.</span>
                <span className='spanFont12'>Click the Play again button and show us you can do it!</span>
              </div>
            </div>
          )}
          <div className='modalBtnsWrapper'>
            <button className='modalBtnPlay' onClick={onPlayAgain}>Play again</button>
            <button className='modalBtnCancel' onClick={onCancel}>Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}


export default GameOverModal;
