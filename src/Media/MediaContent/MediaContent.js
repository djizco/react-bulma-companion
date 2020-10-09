import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function MediaContent({
  children,
  className,
  ...props
}) {
  const classes = classNames('media-content', className);

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}

MediaContent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

MediaContent.defaultProps = {
  className: undefined,
  children: null,
};
