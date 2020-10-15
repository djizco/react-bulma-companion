import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function Image({
  className,
  rounded,
  ...props
}) {
  const classes = classNames('image', className, {
    'is-rounded': rounded,
  });

  return (
    // eslint-disable-next-line
    <img className={classes} {...props} />
  );
}

Image.propTypes = {
  className: PropTypes.string,
  rounded: PropTypes.bool,
};

Image.defaultProps = {
  className: undefined,
  rounded: false,
};
