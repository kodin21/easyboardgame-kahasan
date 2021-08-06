import React, { useState, useEffect } from 'react';
import './App.css';
import Box from './components/Box';
import Char from './components/Char';
import CharOptions from './components/CharOptions';

import {
  calculateBottom, calculateLeft, calculateRight, calculateTop,
} from './helpers/characterMovements';

import useKeyPressed from './hooks/useKeyPressed';
import useLocalStorage from './hooks/useLocalStorage';

function App() {
  const [faster, setFaster] = useState(false);
  const [charType, setCharType] = useState('circle');
  const [dir, setDir] = useState({
    bottom: 54,
    left: 45,
  });

  const isFaster = useKeyPressed('Space');
  const isForward = useKeyPressed('ArrowUp');
  const isBackward = useKeyPressed('ArrowDown');
  const isLeftward = useKeyPressed('ArrowLeft');
  const isRightward = useKeyPressed('ArrowRight');

  const [charPosition, setCharPosition] = useLocalStorage('directions', {
    bottom: 54,
    left: 45,
  });

  useEffect(() => {
    setDir(charPosition);
  }, []);

  useEffect(() => {
    setCharPosition(dir);
  }, [dir]);

  useEffect(() => {
    setFaster(isFaster);
  }, [isFaster]);

  useEffect(() => {
    if (isForward) {
      setDir(() => ({
        faster: dir.faster,
        bottom: calculateBottom(dir.bottom, 420, faster),
        left: dir.left,
      }));
    } else if (isBackward) {
      setDir(() => ({
        faster: dir.faster,
        bottom: calculateTop(dir.bottom, 54, faster),
        left: dir.left,
      }));
    } else if (isLeftward) {
      setDir(() => ({
        faster: dir.faster,
        left: calculateRight(dir.left, 45, faster),
        bottom: dir.bottom,
      }));
    } else if (isRightward) {
      setDir(() => ({
        faster: dir.faster,
        left: calculateLeft(dir.left, 435, faster),
        bottom: dir.bottom,
      }));
    }
  }, [isForward, isBackward, isLeftward, isRightward]);

  return (
    <div className="App">
      <CharOptions setChar={setCharType} />
      <Box>
        <Char dir={dir} charType={charType} />
        {faster && <div className="indicator">2x</div>}
      </Box>
    </div>
  );
}

export default App;
