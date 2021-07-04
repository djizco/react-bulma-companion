import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function DropdownItem({
  children,
  className,
  component,
  link,
  ...props
}) {
  if (process.env.NODE_ENV === 'development' && link) {
    // eslint-disable-next-line
    console.warn('Using the `link` prop is deprecated. Use `component="a"` instead.');
  }

  const Element = link ? 'a' : component;

  const classes = classNames('dropdown-item', className);

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

DropdownItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
  /**
    Deprecation Warning: Use `component="a"`.
  */
  link: PropTypes.bool,
};

DropdownItem.defaultProps = {
  className: undefined,
  children: null,
  component: 'div',
  link: false,
};
