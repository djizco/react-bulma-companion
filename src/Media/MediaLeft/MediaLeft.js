import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function MediaLeft({
  children,
  className,
  component,
  ...props
}) {
  const Element = component;

  const classes = classNames('media-left', className);

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

MediaLeft.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
};

MediaLeft.defaultProps = {
  className: undefined,
  children: null,
  component: 'figure',
};
