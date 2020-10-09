import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function Content({
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

  const classes = classNames('content', className, isSize);

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}

Content.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Content.defaultProps = {
  className: undefined,
  children: null,
  size: undefined,
};
