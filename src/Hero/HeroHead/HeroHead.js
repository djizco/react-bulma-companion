import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function HeroHead({
  children,
  className,
  component,
  ...props
}) {
  const Element = component;

  const classes = classNames('hero-head', className);

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

HeroHead.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
};

HeroHead.defaultProps = {
  className: undefined,
  children: null,
  component: 'div',
};
