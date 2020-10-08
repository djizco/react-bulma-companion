import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function LevelRight({
  children,
  className,
  ...props
}) {
  const levelRightClasses = classNames('level-right', className);

  return (
    <div className={levelRightClasses} {...props}>
      {children}
    </div>
  );
}

LevelRight.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

LevelRight.defaultProps = {
  className: undefined,
  children: null,
};
