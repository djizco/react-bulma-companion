import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Element from '../../Element';

export default function HeroBody({
  children,
  className,
  ...props
}) {
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
