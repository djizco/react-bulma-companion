import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function PanelTab({
  active,
  children,
  className,
  ...props
}) {
  const classes = classNames(className, {
    'is-active': active,
  });

  return (
    <a className={classes} {...props}>
      {children}
    </a>
  );
}

PanelTab.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  active: PropTypes.bool,
};

PanelTab.defaultProps = {
  className: undefined,
  children: null,
  active: false,
};
