import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Element from '../Element';

export default function Section({
  children,
  className,
  size,
  ...props
}) {
  const sizeMap = {
    medium: 'is-medium',
    large: 'is-large',
  };
  const isSize = size && sizeMap[size];

  const classes = classNames('section', className, isSize);

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

Section.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
  size: PropTypes.oneOf(['medium', 'large']),
};

Section.defaultProps = {
  className: undefined,
  children: null,
  component: 'section',
  size: undefined,
};
