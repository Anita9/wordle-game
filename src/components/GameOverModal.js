import React from 'react'
import GameWonStickman from '../img/gamewonstickman.jpg';
import GameLostStickman from '../img/gameloststickman.jpg';

import {BEAT_YOU_MESSAGE, CANCEL_BTN, LOSE_PLAY_AGAIN_MESSAGE, PLAY_AGAIN_BTN, WIN_PLAY_AGAIN_MESSAGE, WORD_WAS, YOU_ARE_ON_FIRE, YOU_LOST_MESSAGE, YOU_WON} from '../Strings';

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
                <h3 className='modalTitleCorrect'>{YOU_ARE_ON_FIRE}</h3>
                <span className='spanFontBold'>{YOU_WON}</span>
                <span className='spanFont13'>{WIN_PLAY_AGAIN_MESSAGE}</span>
                <span className='spanFont13'>{BEAT_YOU_MESSAGE}</span>
              </div>
            </div>
          )}
          {isWordIncorrect && (
            <div>
            <img src={GameLostStickman} alt='Game lost stickman'/>
              <div className='modalTextWrapper'>
                <h3 className='modalTitleIncorrect'>{YOU_LOST_MESSAGE}</h3>
                <span className='spanFontBold'>{WORD_WAS}<span id='selectedWord'>{selectedWord}</span>.</span>
                <span className='spanFont12'>{LOSE_PLAY_AGAIN_MESSAGE}</span>
              </div>
            </div>
          )}
          <div className='modalBtnsWrapper'>
            <button className='modalBtnPlay' onClick={onPlayAgain}>{PLAY_AGAIN_BTN}</button>
            <button className='modalBtnCancel' onClick={onCancel}>{CANCEL_BTN}</button>
          </div>
        </div>
      </div>
    </div>
  )
}


export default GameOverModal;
