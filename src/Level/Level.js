import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import LevelLeft from './LevelLeft';
import LevelRight from './LevelRight';
import LevelItem from './LevelItem';

export default function Level({
  children,
  className,
  component,
  mobile,
  ...props
}) {
  const Element = component;

  const classes = classNames('level', className, {
    'is-mobile': mobile,
  });

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

Level.Left = LevelLeft;
Level.Right = LevelRight;
Level.Item = LevelItem;

Level.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
  mobile: PropTypes.bool,
};

Level.defaultProps = {
  className: undefined,
  children: null,
  component: 'nav',
  mobile: false,
};
