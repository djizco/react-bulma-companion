import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function Heading({
  children,
  className,
  ...props
}) {
  const headingClasses = classNames('heading', className);

  return (
    <p className={headingClasses} {...props}>
      {children}
    </p>
  );
}

Heading.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

Heading.defaultProps = {
  className: undefined,
  children: null,
};
