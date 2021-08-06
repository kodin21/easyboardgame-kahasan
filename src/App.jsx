import React, { useState, useEffect } from 'react';

import useKeyPressed from './hooks/useKeyPressed';
import useLocalStorage from './hooks/useLocalStorage';

import Box from './components/Box';
import './App.css';

function App() {
  const [localValue, setLocalValue] = useLocalStorage('directions', {
    bottom: 54,
    left: 45,
  });

  const [dir, setDir] = useState({
    bottom: localValue.bottom,
    left: localValue.left,
  });

  useEffect(() => {
    setLocalValue(dir);
  }, [dir, setLocalValue]);

  const [faster, setFaster] = useState(false);

  const isForward = useKeyPressed('ArrowUp');
  const isBackward = useKeyPressed('ArrowDown');
  const isLeftward = useKeyPressed('ArrowLeft');
  const isRightward = useKeyPressed('ArrowRight');

  const isFaster = useKeyPressed('Space');

  useEffect(() => {
    setFaster(isFaster);
  }, [isFaster]);

  const fast = faster ? 50 : 10;

  const calculateBottom = (bottom, maxBottom) => {
    if (bottom < maxBottom) {
      return bottom + fast;
    }
    return bottom;
  };

  const calculateLeft = (left, maxLeft) => {
    if (left < maxLeft) {
      return left + fast;
    }
    return left;
  };

  const calculateRight = (right, maxRight) => {
    if (right > maxRight) {
      return right - fast;
    }
    return right;
  };

  const calculateTop = (top, maxTop) => {
    if (top > maxTop) {
      return top - fast;
    }
    return top;
  };

  useEffect(() => {
    if (isForward) {
      setDir(() => ({
        faster: dir.faster,
        bottom: calculateBottom(dir.bottom, 420),
        left: dir.left,
      }));
    } else if (isBackward) {
      setDir(() => ({
        faster: dir.faster,
        bottom: calculateTop(dir.bottom, 54),
        left: dir.left,
      }));
    } else if (isLeftward) {
      setDir(() => ({
        faster: dir.faster,
        left: calculateRight(dir.left, 45),
        bottom: dir.bottom,
      }));
    } else if (isRightward) {
      setDir(() => ({
        faster: dir.faster,
        left: calculateLeft(dir.left, 435),
        bottom: dir.bottom,
      }));
    }
  }, [isForward, isBackward, isLeftward, isRightward]);

  return (
    <div className="App">
      <Box dir={dir} faster={faster} />
    </div>
  );
}

export default App;
