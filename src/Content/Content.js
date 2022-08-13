import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Element from '../Element';

const sizes = ['small', 'normal', 'medium', 'large'];
const sizeMap = {
  small: 'is-small',
  normal: 'is-normal',
  medium: 'is-medium',
  large: 'is-large',
};

export default function Content({
  children,
  className,
  size,
  ...props
}) {
  const isSize = size && sizeMap[size];

  const classes = classNames('content', className, isSize);

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

Content.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
  size: PropTypes.oneOf(sizes),
};

Content.defaultProps = {
  className: undefined,
  children: null,
  component: 'div',
  size: undefined,
};
