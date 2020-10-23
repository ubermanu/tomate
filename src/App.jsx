import React, { useState } from 'react';
import { Button } from 'antd';
import './App.less';

const COUNTDOWN_25 = 25 * 60;
const COUNTDOWN_45 = 45 * 60;

const App = () => {
  let timer;
  const [countdown, setCountdown] = useState(0);

  const startTimer = () => {
    setCountdown(COUNTDOWN_25);
    clearInterval(timer);
    timer = setInterval(() => {
      setCountdown(countdown => countdown - 1);
      if (countdown <= 0) {
        // TODO: Play sound
        // TODO: Show notification
      }
    }, 1000);
  };

  return (
    <div className="App">
      <p>
        {Math.floor(countdown / 60)}: {countdown % 60}
      </p>
      <Button type="primary" onClick={startTimer}>
        Button
      </Button>
    </div>
  );
};

export default App;
