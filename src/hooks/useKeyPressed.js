import { useState, useEffect } from 'react';

const noop = () => {};

export const useKeyPressed = (givenKey, handler = noop) => {
  const [isKeyPressed, setIsKeyPressed] = useState(false);
  const isSameKey = (givenKey, pressedKey) =>
    givenKey.toLowerCase() === pressedKey.toLowerCase();

  const handleKeyDown = (event) => {
    if (isSameKey(givenKey, event.code)) {
      setIsKeyPressed(true);
      handler(event);
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
  }, [isKeyPressed]);

  return isKeyPressed;
};
