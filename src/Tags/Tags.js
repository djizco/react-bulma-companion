import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function Tags({
  addons,
  align,
  children,
  className,
  size,
  ...props
}) {
  // Sizes
  const sizeMap = {
    medium: 'are-medium',
    large: 'are-large',
  };
  const areSize = size && sizeMap[size];

  // Align
  const alignMap = {
    center: 'is-centered',
    right: 'is-right',
  };
  const isAlign = align && alignMap[align];

  const tagsClasses = classNames('tags', className, areSize, isAlign, {
    'has-addons': addons,
  });

  return (
    <div className={tagsClasses} {...props}>
      {children}
    </div>
  );
}

Tags.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.oneOf(['medium', 'large']),
  addons: PropTypes.bool,
  align: PropTypes.oneOf(['center', 'right']),
};

Tags.defaultProps = {
  className: undefined,
  children: null,
  size: undefined,
  addons: false,
  align: undefined,
};
