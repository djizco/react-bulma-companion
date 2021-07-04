import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function FileLabel({
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

FileLabel.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
};

FileLabel.defaultProps = {
  className: undefined,
  children: null,
  component: 'label',
};
