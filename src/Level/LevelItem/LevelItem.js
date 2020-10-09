import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function LevelItem({
  children,
  className,
  link,
  ...props
}) {
  const Element = link ? 'a' : 'div';
  const classes = classNames('level-item', className);

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

LevelItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  link: PropTypes.bool,
};

LevelItem.defaultProps = {
  className: undefined,
  children: null,
  link: false,
};
