import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function MenuList({
  children,
  className,
  ...props
}) {
  const classes = classNames('menu-list', className);

  return (
    <ul className={classes} {...props}>
      {children}
    </ul>
  );
}

MenuList.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

MenuList.defaultProps = {
  className: undefined,
  children: null,
};
