import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function Box({
  children,
  className,
  ...props
}) {
  const BoxClasses = classNames('box', className);

  return (
    <div className={BoxClasses} {...props}>
      {children}
    </div>
  );
}

Box.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Box.defaultProps = {
  children: null,
  className: '',
};
