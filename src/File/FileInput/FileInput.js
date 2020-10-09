import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function FileInput({
  className,
  ...props
}) {
  const classes = classNames('file-input', className);

  return (
    <input className={classes} {...props} />
  );
}

FileInput.propTypes = {
  className: PropTypes.string,
};

FileInput.defaultProps = {
  className: undefined,
};
