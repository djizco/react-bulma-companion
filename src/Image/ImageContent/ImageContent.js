import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function Image({
  className,
  component,
  rounded,
  ...props
}) {
  const Element = component;

  const classes = classNames('image', className, {
    'is-rounded': rounded,
  });

  return (
    // eslint-disable-next-line
    <Element className={classes} {...props} />
  );
}

Image.propTypes = {
  className: PropTypes.string,
  component: PropTypes.elementType,
  rounded: PropTypes.bool,
};

Image.defaultProps = {
  className: undefined,
  component: 'img',
  rounded: false,
};
