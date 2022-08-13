import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Element from '../../Element';

export default function PanelTabs({
  children,
  className,
  ...props
}) {
  const classes = classNames('panel-tabs', className);

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

PanelTabs.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
};

PanelTabs.defaultProps = {
  className: undefined,
  children: null,
  component: 'p',
};
