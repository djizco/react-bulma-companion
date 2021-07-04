import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function TableRow({
  children,
  className,
  component,
  selected,
  ...props
}) {
  const Element = component;

  const classes = classNames(className, {
    'is-selected': selected,
  });

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

TableRow.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
  selected: PropTypes.bool,
};

TableRow.defaultProps = {
  className: undefined,
  children: null,
  component: 'tr',
  selected: false,
};
