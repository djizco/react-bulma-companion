import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Element from '../../Element';

export default function Image({
  className,
  rounded,
  ...props
}) {
  const classes = classNames('image', className, {
    'is-rounded': rounded,
  });

  return (
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
