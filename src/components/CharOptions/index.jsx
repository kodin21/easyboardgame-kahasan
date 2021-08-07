/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import Option from './Option';
import CharModels from '../../configs/CharModels';

export default function CharOptions({ setChar }) {
  const [selectedOption, setSelectedOption] = useState('circle');
  return (
    <div className="btn-group-vertical charlist">
      {
      CharModels.map((model) => (
        <Option
          key={model.id}
          {...Object.assign(model, { setChar, selectedOption, setSelectedOption })}
        />
      ))
}
    </div>
  );
}
