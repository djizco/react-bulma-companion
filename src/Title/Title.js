import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Element from '../Element';

export default function Title({
  children,
  className,
  size,
  spaced,
  subtitle,
  ...props
}) {
  const isTitle = !subtitle ? 'title' : 'subtitle';

  const sizeMap = {
    1: 'is-1',
    2: 'is-2',
    3: 'is-3',
    4: 'is-4',
    5: 'is-5',
    6: 'is-6',
  };
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
  size: PropTypes.oneOf(['1', '2', '3', '4', '5', '6']),
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
