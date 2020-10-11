import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function TabsListItem({
  active,
  children,
  className,
  ...props
}) {
  const classes = classNames(className, {
    'is-active': active,
  });

  return (
    <li className={classes} {...props}>
      {children}
    </li>
  );
}

TabsListItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  active: PropTypes.bool,
};

TabsListItem.defaultProps = {
  className: undefined,
  children: null,
  active: false,
};
