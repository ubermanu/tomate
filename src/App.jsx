import React, { useState } from 'react';
import { Button } from 'antd';
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
        clearInterval(timer);
        // TODO: Play sound
        // TODO: Show notification
      }
    }, 1000);

    setTimer(id);
  };

  return (
    <div className="App">
      {countdown > 0 && (
        <p>
          {Math.floor(countdown / 60)}: {countdown % 60}
        </p>
      )}
      <Button type="primary" onClick={() => startTimer(25 * 60)}>
        25:00
      </Button>
      <Button type="primary" onClick={() => startTimer(45 * 60)}>
        45:00
      </Button>
    </div>
  );
};

export default App;
