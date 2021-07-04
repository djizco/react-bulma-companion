import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function MediaRight({
  children,
  className,
  component,
  ...props
}) {
  const Element = component;

  const classes = classNames('media-right', className);

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

MediaRight.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
};

MediaRight.defaultProps = {
  className: undefined,
  children: null,
  component: 'div',
};
