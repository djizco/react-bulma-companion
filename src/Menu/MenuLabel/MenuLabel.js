import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function MenuLabel({
  children,
  className,
  ...props
}) {
  const classes = classNames('menu-label', className);

  return (
    <p className={classes} {...props}>
      {children}
    </p>
  );
}

MenuLabel.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

MenuLabel.defaultProps = {
  className: undefined,
  children: null,
};
