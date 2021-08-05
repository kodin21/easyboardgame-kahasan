import { useState, useEffect } from 'react';

const getSavedData = (key, initialValue) => {
  const savedValue = JSON.parse(localStorage.getItem(key));

  if (savedValue) return savedValue;

  return initialValue;
};

export const useLocalStorage = (key, initialValue) => {
  const [data, setData] = useState(() => {
    return getSavedData(key, initialValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [data]);

  return [data, setData];
};
