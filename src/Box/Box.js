import React from 'react';
import PropTypes from 'prop-types';

export default function Box({ children }) {
  return (
    <div className="box">{children}</div>
  );
}

Box.propTypes = {
  children: PropTypes.element,
};

Box.defaultProps = {
  children: null,
};
