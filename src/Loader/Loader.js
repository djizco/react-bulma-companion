import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function Loader({
  className,
  component,
  ...props
}) {
  const Element = component;

  const classes = classNames('loader', className);

  return (
    <Element className={classes} {...props} />
  );
}

Loader.propTypes = {
  className: PropTypes.string,
  component: PropTypes.elementType,
};

Loader.defaultProps = {
  className: undefined,
  component: 'span',
};
