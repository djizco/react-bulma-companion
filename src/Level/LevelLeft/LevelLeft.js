import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Element from '../../Element';

export default function LevelLeft({
  children,
  className,
  ...props
}) {
  const classes = classNames('level-left', className);

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

LevelLeft.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
};

LevelLeft.defaultProps = {
  className: undefined,
  children: null,
  component: 'div',
};
