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

  const ContentClasses = classNames('content', className, isSize);

  return (
    <div className={ContentClasses} {...props}>
      {children}
    </div>
  );
}

Content.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Content.defaultProps = {
  children: null,
  className: undefined,
  size: undefined,
};
