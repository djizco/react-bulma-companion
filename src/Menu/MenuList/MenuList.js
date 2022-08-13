import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Element from '../../Element';

export default function MenuList({
  children,
  className,
  ...props
}) {
  const classes = classNames('menu-list', className);

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

MenuList.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
};

MenuList.defaultProps = {
  className: undefined,
  children: null,
  component: 'ul',
};
