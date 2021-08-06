import React from 'react';

import PropTypes from 'prop-types';

function Char({ dir, className }) {
  return (
    <div
      className={className}
      style={{ left: `${dir.left}px`, bottom: `${dir.bottom}px` }}
    />
  );
}

Char.propTypes = {
  dir: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  className: PropTypes.string.isRequired,
};

export default Char;
