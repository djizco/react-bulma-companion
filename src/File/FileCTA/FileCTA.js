import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function FileCTA({
  children,
  className,
  ...props
}) {
  const fileCTAClasses = classNames('file-cta', className);

  return (
    <span className={fileCTAClasses} {...props}>
      {children}
    </span>
  );
}

FileCTA.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

FileCTA.defaultProps = {
  className: undefined,
  children: null,
};
