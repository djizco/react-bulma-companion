import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function FileLabel({
  children,
  className,
  ...props
}) {
  const classes = classNames('file-label', className);

  return (
    <label className={classes} {...props}>
      {children}
    </label>
  );
}

FileLabel.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

FileLabel.defaultProps = {
  className: undefined,
  children: null,
};
