import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function FileIcon({
  children,
  className,
  ...props
}) {
  const fileIconClasses = classNames('file-icon', className);

  return (
    <span className={fileIconClasses} {...props}>
      {children}
    </span>
  );
}

FileIcon.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

FileIcon.defaultProps = {
  className: undefined,
  children: null,
};
