import React, { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const Charlist = () => {
  const [data, setData] = useLocalStorage('selectedChar', 'circle');

  const [style, setStyle] = useState(data);

  return (
    <select
      value={data}
      onChange={(e) => {
        setData(e.target.value);
        setStyle(data);
      }}
    >
      <option value="circle">Circle</option>
      <option value="square">Square</option>
    </select>
  );
};

export default Charlist;
