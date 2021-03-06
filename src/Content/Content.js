import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function Content({
  children,
  className,
  component,
  size,
  ...props
}) {
  const Element = component;

  const sizeMap = {
    small: 'is-small',
    normal: 'is-normal',
    medium: 'is-medium',
    large: 'is-large',
  };
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
  size: PropTypes.oneOf(['small', 'normal', 'medium', 'large']),
};

Content.defaultProps = {
  className: undefined,
  children: null,
  component: 'div',
  size: undefined,
};
