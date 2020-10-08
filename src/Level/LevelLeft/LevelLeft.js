import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function LevelLeft({
  children,
  className,
  ...props
}) {
  const levelLeftClasses = classNames('level-left', className);

  return (
    <div className={levelLeftClasses} {...props}>
      {children}
    </div>
  );
}

LevelLeft.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

LevelLeft.defaultProps = {
  className: undefined,
  children: null,
};
