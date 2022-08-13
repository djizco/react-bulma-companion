import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Element from '../../Element';

export default function MenuLabel({
  children,
  className,
  ...props
}) {
  const classes = classNames('menu-label', className);

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

MenuLabel.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
};

MenuLabel.defaultProps = {
  className: undefined,
  children: null,
  component: 'p',
};
