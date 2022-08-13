import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Element from '../../Element';

export default function PanelBlock({
  active,
  children,
  className,
  wrapped,
  ...props
}) {
  const classes = classNames('panel-block', className, {
    'is-active': active,
    'is-wrapped': wrapped,
  });

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

PanelBlock.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
  active: PropTypes.bool,
  wrapped: PropTypes.bool,
};

PanelBlock.defaultProps = {
  className: undefined,
  children: null,
  component: 'div',
  active: false,
  wrapped: false,
};
