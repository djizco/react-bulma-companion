import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function Title({
  children,
  className,
  size,
  spaced,
  subtitle,
  useHeader,
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

  const titleClasses = classNames(isTitle, className, isSize, {
    'is-spaced': spaced,
  });

  if (useHeader && size === '1') {
    return (
      <h1 className={titleClasses} {...props}>
        {children}
      </h1>
    );
  }

  if (useHeader && size === '2') {
    return (
      <h2 className={titleClasses} {...props}>
        {children}
      </h2>
    );
  }

  if ((useHeader && size === '3') || (useHeader && !subtitle && !size)) {
    return (
      <h3 className={titleClasses} {...props}>
        {children}
      </h3>
    );
  }

  if (useHeader && size === '4') {
    return (
      <h4 className={titleClasses} {...props}>
        {children}
      </h4>
    );
  }

  if ((useHeader && size === '5') || (useHeader && subtitle && !size)) {
    return (
      <h5 className={titleClasses} {...props}>
        {children}
      </h5>
    );
  }

  if (useHeader && size === '6') {
    return (
      <h6 className={titleClasses} {...props}>
        {children}
      </h6>
    );
  }

  return (
    <p className={titleClasses} {...props}>
      {children}
    </p>
  );
}

Title.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  subtitle: PropTypes.bool,
  size: PropTypes.oneOf(['1', '2', '3', '4', '5', '6']),
  spaced: PropTypes.bool,
  useHeader: PropTypes.bool,
};

Title.defaultProps = {
  className: undefined,
  children: null,
  subtitle: false,
  size: undefined,
  spaced: false,
  useHeader: false,
};
