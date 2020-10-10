import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function PanelHeading({
  children,
  className,
  ...props
}) {
  const classes = classNames('panel-heading', className);

  return (
    <p className={classes} {...props}>
      {children}
    </p>
  );
}

PanelHeading.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

PanelHeading.defaultProps = {
  className: undefined,
  children: null,
};
