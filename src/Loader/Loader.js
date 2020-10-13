import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function Loader({
  className,
  ...props
}) {
  const classes = classNames('loader', className);

  return (
    <span className={classes} {...props} />
  );
}

Loader.propTypes = {
  className: PropTypes.string,
};

Loader.defaultProps = {
  className: undefined,
};
