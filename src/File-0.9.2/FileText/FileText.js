import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function FileText({
  children,
  className,
  component,
  ...props
}) {
  const Element = component;

  const classes = classNames('file-label', className);

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

FileText.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
};

FileText.defaultProps = {
  className: undefined,
  children: null,
  component: 'span',
};
