import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function FileInput({
  className,
  component,
  ...props
}) {
  const Element = component;

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
