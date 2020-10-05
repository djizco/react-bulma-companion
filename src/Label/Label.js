import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function Label({
  children,
  className,
  size,
  ...props
}) {
  const sizeMap = {
    small: 'is-small',
    medium: 'is-medium',
    large: 'is-large',
  };
  const isSize = size && sizeMap[size];

  const labelClasses = classNames('label', className, isSize);

  return (
    <label className={labelClasses} {...props}>
      {children}
    </label>
  );
}

Label.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Label.defaultProps = {
  className: undefined,
  children: null,
  size: undefined,
};
