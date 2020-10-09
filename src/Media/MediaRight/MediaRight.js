import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function MediaRight({
  children,
  className,
  ...props
}) {
  const classes = classNames('media-right', className);

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}

MediaRight.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

MediaRight.defaultProps = {
  className: undefined,
  children: null,
};
