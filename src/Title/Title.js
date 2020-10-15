import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function Title({
  children,
  className,
  size,
  spaced,
  subtitle,
  header,
  ...props
}) {
  const isTitle = !subtitle ? 'title' : 'subtitle';
  let Element = 'p';

  if (header) {
    if (size === '1') {
      Element = 'h1';
    } else if (size === '2') {
      Element = 'h2';
    } else if ((size === '3') || (!subtitle && !size)) {
      Element = 'h3';
    } else if (size === '4') {
      Element = 'h4';
    } else if ((size === '5') || (subtitle && !size)) {
      Element = 'h5';
    } else if (size === '6') {
      Element = 'h6';
    }
  }

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
  subtitle: PropTypes.bool,
  size: PropTypes.oneOf(['1', '2', '3', '4', '5', '6']),
  spaced: PropTypes.bool,
  header: PropTypes.bool,
};

Title.defaultProps = {
  className: undefined,
  children: null,
  subtitle: false,
  size: undefined,
  spaced: false,
  header: false,
};
