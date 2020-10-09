import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function Image({
  alt,
  className,
  rounded,
  ...props
}) {
  const classes = classNames('image', className, {
    'is-rounded': rounded,
  });

  return (
    <img className={classes} alt={alt} {...props} />
  );
}

Image.propTypes = {
  className: PropTypes.string,
  rounded: PropTypes.bool,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

Image.defaultProps = {
  className: undefined,
  rounded: false,
  alt: undefined,
};
