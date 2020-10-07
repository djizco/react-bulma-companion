import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function FileLabel({
  children,
  className,
  ...props
}) {
  const fileLabelClasses = classNames('file-label', className);

  return (
    <label className={fileLabelClasses} {...props}>
      {children}
    </label>
  );
}

FileLabel.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

FileLabel.defaultProps = {
  className: undefined,
  children: null,
};
