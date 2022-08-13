import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Element from '../../Element';

export default function HeroButtons({
  children,
  className,
  ...props
}) {
  const classes = classNames('hero-buttons', className);

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

HeroButtons.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
};

HeroButtons.defaultProps = {
  className: undefined,
  children: null,
  component: 'div',
};
