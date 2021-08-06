import React, { memo } from 'react';

// eslint-disable-next-line react/prop-types
function Box({ children }) {
  return (
    <div className="Box">
      {children}
    </div>
  );
}

export default memo(Box);
