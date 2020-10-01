import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function Block({
  children,
  className,
  ...props
}) {
  const blockClasses = classNames('block', className);

  return (
    <div className={blockClasses} {...props}>
      {children}
    </div>
  );
}

Block.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

Block.defaultProps = {
  className: undefined,
  children: null,
};
