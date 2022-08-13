import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Element from '../../Element';

export default function PanelIcon({
  children,
  className,
  ...props
}) {
  const classes = classNames('panel-icon', className);

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

PanelIcon.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
};

PanelIcon.defaultProps = {
  className: undefined,
  children: null,
  component: 'span',
};
