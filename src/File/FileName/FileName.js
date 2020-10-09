import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function FileName({
  children,
  className,
  ...props
}) {
  const classes = classNames('file-name', className);

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
}

FileName.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

FileName.defaultProps = {
  className: undefined,
  children: null,
};
