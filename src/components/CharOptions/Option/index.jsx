/* eslint-disable react/prop-types */
import React, { memo } from 'react';

const Option = ({
  id, value, setChar, selectedOption, setSelectedOption,
}) => (
  <>
    <button
      type="button"
      className={`btn btn-${selectedOption === value ? 'success' : 'light'}`}
      name="btnradio"
      id={id}
      value={value}
      onClick={() => {
        setChar(value);
        setSelectedOption(value);
      }}
    >
      {id}
    </button>

  </>
);

export default memo(Option);
