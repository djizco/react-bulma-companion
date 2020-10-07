import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function FileName({
  children,
  className,
  ...props
}) {
  const fileNameClasses = classNames('file-name', className);

  return (
    <span className={fileNameClasses} {...props}>
      {children}
    </span>
  );
}

FileName.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

FileName.defaultProps = {
  className: undefined,
  children: null,
};
