import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function HeroFoot({
  children,
  className,
  component,
  ...props
}) {
  const Element = component;

  const classes = classNames('hero-foot', className);

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

HeroFoot.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
};

HeroFoot.defaultProps = {
  className: undefined,
  children: null,
  component: 'div',
};
