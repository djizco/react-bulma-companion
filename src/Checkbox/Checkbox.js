import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function Block({
  children,
  className,
  ...props
}) {
  const classes = classNames('checkbox', className);

  return (
    <label className={classes} {...props}>
      {children}
    </label>
  );
}

Block.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  disabled: PropTypes.bool,
};

Block.defaultProps = {
  className: undefined,
  children: null,
  disabled: false,
};
