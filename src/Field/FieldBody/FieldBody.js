import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function FieldBody({
  children,
  className,
  component,
  ...props
}) {
  const Element = component;

  const classes = classNames('field-body', className);

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

FieldBody.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
};

FieldBody.defaultProps = {
  className: undefined,
  children: null,
  component: 'div',
};
