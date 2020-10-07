import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function FileText({
  children,
  className,
  ...props
}) {
  const fileTextClasses = classNames('file-label', className);

  return (
    <span className={fileTextClasses} {...props}>
      {children}
    </span>
  );
}

FileText.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

FileText.defaultProps = {
  className: undefined,
  children: null,
};
