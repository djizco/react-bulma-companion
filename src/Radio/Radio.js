import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function Radio({
  children,
  className,
  ...props
}) {
  const radioClasses = classNames('radio', className);

  return (
    <label className={radioClasses} {...props}>
      {children}
    </label>
  );
}

Radio.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  disabled: PropTypes.bool,
};

Radio.defaultProps = {
  className: undefined,
  children: null,
  disabled: false,
};
