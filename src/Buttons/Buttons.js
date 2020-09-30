import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function Buttons({
  children,
  className,
  size,
  ...props
}) {
  const sizeMap = {
    small: 'are-small',
    medium: 'are-medium',
    large: 'are-large',
  };
  const isSize = size && sizeMap[size];

  const ButtonsClasses = classNames('buttons', className, isSize);

  return (
    <div className={ButtonsClasses} {...props}>
      {children}
    </div>
  );
}

Buttons.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Buttons.defaultProps = {
  className: undefined,
  children: null,
  size: undefined,
};
