/* eslint-disable no-undef */
import { useState, useEffect } from 'react';

const noop = () => {};

const useKeyPressed = (givenKey, handler = noop) => {
  const [isKeyPressed, setIsKeyPressed] = useState(false);
  const isSameKey = (key, pressedKey) => key.toLowerCase() === pressedKey.toLowerCase();
  const handleKeyDown = (event) => {
    if (isSameKey(givenKey, event.code)) {
      setIsKeyPressed(true);
      handler();
    }
  };

  const handleKeyUp = (event) => {
    if (isSameKey(givenKey, event.code)) {
      setIsKeyPressed(false);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return isKeyPressed;
};

export default useKeyPressed;
