import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Element from '../Element';

const sizes = ['1', '2', '3', '4', '5', '6'];
const sizeMap = {};
sizes.forEach(size => {
  sizeMap[size] = `is-${size}`;
});

export default function Title({
  children,
  className,
  size,
  spaced,
  subtitle,
  ...props
}) {
  const isTitle = !subtitle ? 'title' : 'subtitle';
  const isSize = size && sizeMap[size];

  const classes = classNames(isTitle, className, isSize, {
    'is-spaced': spaced,
  });

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

Title.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
  subtitle: PropTypes.bool,
  size: PropTypes.oneOf(sizes),
  spaced: PropTypes.bool,
};

Title.defaultProps = {
  className: undefined,
  children: null,
  component: 'p',
  subtitle: false,
  size: undefined,
  spaced: false,
};
