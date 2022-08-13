import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Element from '../../Element';

export default function DropdownContent({
  children,
  className,
  ...props
}) {
  const classes = classNames('dropdown-content', className);

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

DropdownContent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
};

DropdownContent.defaultProps = {
  className: undefined,
  children: null,
  component: 'div',
};
