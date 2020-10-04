import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function FieldBody({
  children,
  className,
  ...props
}) {
  const fieldBodyClasses = classNames('field-label', className);

  return (
    <div className={fieldBodyClasses} {...props}>
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
