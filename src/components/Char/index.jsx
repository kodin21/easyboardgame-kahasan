import React from 'react';

import PropTypes from 'prop-types';

import styles from './Char.module.css';

function Char({ dir, charType }) {
  return (
    <div
      className={styles[charType]}
      style={{ left: `${dir.left}px`, bottom: `${dir.bottom}px` }}
    />
  );
}

Char.propTypes = {
  dir: PropTypes.shape({
    left: PropTypes.number,
    bottom: PropTypes.number,
  }).isRequired,
  charType: PropTypes.string.isRequired,
};

export default Char;
