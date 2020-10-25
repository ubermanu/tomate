import React, { useState } from 'react';
import { Button, Space } from 'antd';
import { Typography } from 'antd';
import useSound from 'use-sound';

import './App.less';
import bellSfx from './media/484344__inspectorj__bike-bell-ding-single-01-01.ogg';

const { Title } = Typography;

const App = () => {
  const [timer, setTimer] = useState(0);
  const [countdown, setCountdown] = useState(0);
  const [play] = useSound(bellSfx);

  const tick = () => {
    setCountdown(prevCountdown => prevCountdown - 1);

    if (countdown <= 0) {
      console.log("Time's up!");
      clearInterval(timer);
      sendNotification("It's time to chill for a bit!");
      play();
    }
  };

  const startTimer = seconds => {
    clearInterval(timer);
    setCountdown(seconds - 1);
    const id = setInterval(tick, 1000);
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
    <Space direction="vertical" style={{ textAlign: 'center', margin: '3rem' }}>
      <Title>
        <span role="img" aria-label="Tomate">
          🍅
        </span>
      </Title>
      <Space>
        <Button type="primary" onClick={() => startTimer(25 * 60)}>
          25:00
        </Button>
        <Button type="primary" onClick={() => startTimer(45 * 60)}>
          45:00
        </Button>
      </Space>
      {countdown > 0 && (
        <Title
          level={2}
          style={{
            color: 'white',
            textShadow: '1px 1px 0 rgba(0, 0, 0, 0.4)',
          }}
        >
          {formatMinutes(countdown)} : {formatSeconds(countdown)}
        </Title>
      )}
    </Space>
  );
};

export default App;
