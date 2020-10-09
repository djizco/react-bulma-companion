import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import LevelLeft from './LevelLeft';
import LevelRight from './LevelRight';
import LevelItem from './LevelItem';

export default function Level({
  children,
  className,
  mobile,
  ...props
}) {
  const classes = classNames('level', className, {
    'is-mobile': mobile,
  });

  return (
    <nav className={classes} {...props}>
      {children}
    </nav>
  );
}

Level.Left = LevelLeft;
Level.Right = LevelRight;
Level.Item = LevelItem;

Level.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  mobile: PropTypes.bool,
};

Level.defaultProps = {
  className: undefined,
  children: null,
  mobile: false,
};
