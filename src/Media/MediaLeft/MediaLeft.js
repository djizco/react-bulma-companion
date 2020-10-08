import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function MediaLeft({
  children,
  className,
  ...props
}) {
  const mediaLeftClasses = classNames('media-left', className);

  return (
    <figure className={mediaLeftClasses} {...props}>
      {children}
    </figure>
  );
}

MediaLeft.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

MediaLeft.defaultProps = {
  className: undefined,
  children: null,
};
