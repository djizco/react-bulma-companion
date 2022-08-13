import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Element from '../Element';

export default function Loader({
  className,
  ...props
}) {
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
