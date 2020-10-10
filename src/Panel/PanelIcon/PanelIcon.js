import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function PanelIcon({
  children,
  className,
  ...props
}) {
  const classes = classNames('panel-icon', className);

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
}

PanelIcon.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

PanelIcon.defaultProps = {
  className: undefined,
  children: null,
};
