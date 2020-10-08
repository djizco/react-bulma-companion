import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function LevelItem({
  children,
  className,
  ...props
}) {
  const levelItemClasses = classNames('level-item', className);

  return (
    <div className={levelItemClasses} {...props}>
      {children}
    </div>
  );
}

LevelItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

LevelItem.defaultProps = {
  className: undefined,
  children: null,
};
