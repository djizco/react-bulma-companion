import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function PanelTabs({
  children,
  className,
  ...props
}) {
  const classes = classNames('panel-tabs', className);

  return (
    <p className={classes} {...props}>
      {children}
    </p>
  );
}

PanelTabs.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

PanelTabs.defaultProps = {
  className: undefined,
  children: null,
};
