import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Element from '../../Element';

export default function CardHeader({
  children,
  className,
  ...props
}) {
  const classes = classNames('card-header', className);

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

CardHeader.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
};

CardHeader.defaultProps = {
  className: undefined,
  children: null,
  component: 'header',
};
