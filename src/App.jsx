import React, { useState } from 'react';
import { Button, Divider } from 'antd';
import './App.less';

const App = () => {
  const [timer, setTimer] = useState(0);
  const [countdown, setCountdown] = useState(0);

  const startTimer = seconds => {
    clearInterval(timer);
    setCountdown(seconds - 1);

    const id = setInterval(() => {
      setCountdown(countdown => countdown - 1);
      if (countdown <= 0) {
        console.log("Time's up!");
        clearInterval(id);
        sendNotification("It's time to chill for a bit!");
        // TODO: Play sound
      }
    }, 1000);

    setTimer(id);
  };

  const sendNotification = body => {
    if ('Notification' in window) {
      new Notification('🍅', {
        body,
      });
    }
  };

  return (
    <div className="App" style={{ textAlign: 'center' }}>
      <h1>
        <span role="img" aria-label="Tomate">
          🍅
        </span>
      </h1>
      {countdown > 0 && (
        <p>
          {Math.floor(countdown / 60)}: {countdown % 60}
        </p>
      )}
      <Button type="primary" onClick={() => startTimer(25 * 60)}>
        25:00
      </Button>
      <Divider type="vertical" />
      <Button type="primary" onClick={() => startTimer(45 * 60)}>
        45:00
      </Button>
    </div>
  );
};

export default App;
