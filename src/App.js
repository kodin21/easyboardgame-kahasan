import './App.css';
import Box from './components/Box';

import React, { useState, useEffect } from 'react';

function App() {
  !localStorage.getItem('directions') &&
    localStorage.setItem(
      'directions',
      JSON.stringify({ faster: false, bottom: 0, left: 0 })
    );

  const rawLocal = localStorage.getItem('directions');

  const parsedLocal = JSON.parse(rawLocal);

  const [dir, setDir] = useState({
    faster: false,
    bottom: parsedLocal.bottom,
    left: parsedLocal.left,
  });

  useEffect(() => {
    localStorage.setItem('directions', JSON.stringify(dir));
  }, [dir]);

  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.code === 'Space') {
        setDir((prevState) => ({
          faster: true,
          bottom: prevState.bottom,
          left: prevState.left,
        }));
      }
    });
    document.addEventListener('keyup', (e) => {
      if (e.code === 'Space') {
        setDir((prevState) => ({
          faster: false,
          bottom: prevState.bottom,
          left: prevState.left,
        }));
      }
    });
    return () =>
      document.removeEventListener('keydown keyup', console.log('removed'));
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.code === 'ArrowUp') {
        setDir((prevState) => ({
          faster: prevState.faster,
          bottom:
            prevState.bottom < 480
              ? prevState.bottom +
                (prevState.faster
                  ? prevState.bottom + 50 < 480
                    ? 50
                    : 480 - prevState.bottom
                  : 10)
              : prevState.bottom,
          left: prevState.left,
        }));
      } else if (e.code === 'ArrowDown') {
        setDir((prevState) => ({
          faster: prevState.faster,
          bottom:
            prevState.bottom <= 480 && prevState.bottom > 0
              ? prevState.bottom - 10
              : prevState.bottom,
          left: prevState.left,
        }));
      } else if (e.code === 'ArrowLeft') {
        setDir((prevState) => ({
          faster: prevState.faster,
          left:
            prevState.left <= 480 && prevState.left > 0
              ? prevState.left - 10
              : prevState.left,
          bottom: prevState.bottom,
        }));
        console.log(dir);
      } else if (e.code === 'ArrowRight') {
        setDir((prevState) => ({
          faster: prevState.faster,
          left: prevState.left < 480 ? prevState.left + 10 : prevState.left,
          bottom: prevState.bottom,
        }));
      }
    });

    return () =>
      document.removeEventListener('keydown', console.log('removed'));
  }, []);

  return (
    <div className="App">
      <Box dir={dir} />
    </div>
  );
}

export default App;
