import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function FieldBody({
  children,
  className,
  ...props
}) {
  const classes = classNames('field-body', className);

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}

FieldBody.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

FieldBody.defaultProps = {
  className: undefined,
  children: null,
};
