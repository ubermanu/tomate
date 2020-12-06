import React, { useState } from 'react';
import useSound from 'use-sound';

// import './App.less';
import bellSfx from './media/484344__inspectorj__bike-bell-ding-single-01-01.ogg';

const App = () => {
  const [timer, setTimer] = useState(0);
  const [countdown, setCountdown] = useState(0);
  const [giggle, setGiggle] = useState(false);
  const [play] = useSound(bellSfx);

  const tick = timer => {
    // countdown is not accessible in this scope, to investigate
    let tmp = 0;
    setCountdown(prevCountdown => (tmp = prevCountdown - 1));

    if (tmp <= 0) {
      console.log("Time's up!");
      clearInterval(timer);
      sendNotification("It's time to chill for a bit!");
      setGiggle(true);
      play();
    }
  };

  const startTimer = seconds => {
    clearInterval(timer);
    setCountdown(seconds - 1);
    setGiggle(false);
    const id = setInterval(() => tick(id), 1000);
    setTimer(id);
  };

  const sendNotification = body => {
    if ('Notification' in window) {
      new Notification('🍅', {
        body,
      });
    }
  };

  const formatMinutes = seconds => {
    return Math.floor(seconds / 60)
      .toString()
      .padStart(2, '0');
  };

  const formatSeconds = seconds => {
    return (seconds % 60).toString().padStart(2, '0');
  };

  return (
    <div style={{ textAlign: 'center', margin: '3rem' }}>
      <h1 className={giggle && 'App-Tomato-TimesUp'}>
        <span role="img" aria-label="Tomate">
          🍅
        </span>
      </h1>
      <div>
        <button type="primary" onClick={() => startTimer(25 * 60)}>
          25:00
        </button>
        <button type="primary" onClick={() => startTimer(45 * 60)}>
          45:00
        </button>
      </div>
      {countdown > 0 && (
        <p
          style={{
            fontSize: '44px',
            marginTop: '0.5em',
            color: 'white',
            textShadow: '1px 1px 0 rgba(0, 0, 0, 0.4)',
          }}
        >
          {formatMinutes(countdown)} : {formatSeconds(countdown)}
        </p>
      )}
    </div>
  );
};

export default App
