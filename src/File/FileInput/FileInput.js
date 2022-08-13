import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Element from '../../Element';

export default function FileInput({
  className,
  ...props
}) {
  const classes = classNames('file-input', className);

  return (
    <Element className={classes} {...props} />
  );
}

FileInput.propTypes = {
  className: PropTypes.string,
  component: PropTypes.elementType,
};

FileInput.defaultProps = {
  className: undefined,
  component: 'input',
};
