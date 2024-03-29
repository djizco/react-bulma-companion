import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Element from '../../Element';

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
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

TabsListItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
  active: PropTypes.bool,
};

TabsListItem.defaultProps = {
  className: undefined,
  children: null,
  component: 'li',
  active: false,
};
