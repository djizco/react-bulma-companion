import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function HeroBody({
  children,
  className,
  component,
  ...props
}) {
  const Element = component;

  const classes = classNames('hero-body', className);

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

HeroBody.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
};

HeroBody.defaultProps = {
  className: undefined,
  children: null,
  component: 'div',
};
