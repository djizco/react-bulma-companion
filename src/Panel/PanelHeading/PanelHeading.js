import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Element from '../../Element';

export default function PanelHeading({
  children,
  className,
  ...props
}) {
  const classes = classNames('panel-heading', className);

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

PanelHeading.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
};

PanelHeading.defaultProps = {
  className: undefined,
  children: null,
  component: 'p',
};
