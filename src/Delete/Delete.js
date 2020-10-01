import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function Delete({
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

  const deleteClasses = classNames('delete', className, isSize);

  return (
    <a className={deleteClasses} {...props}>
      {children}
    </a>
  );
}

Delete.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Delete.defaultProps = {
  className: undefined,
  children: null,
  size: undefined,
};
