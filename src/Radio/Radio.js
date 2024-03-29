import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Element from '../Element';

export default function Radio({
  children,
  className,
  ...props
}) {
  const classes = classNames('radio', className);

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

Radio.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
  disabled: PropTypes.bool,
};

Radio.defaultProps = {
  className: undefined,
  children: null,
  component: 'label',
  disabled: false,
};
