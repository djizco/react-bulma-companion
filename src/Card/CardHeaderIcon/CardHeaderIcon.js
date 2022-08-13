import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Element from '../../Element';

export default function CardHeaderIcon({
  children,
  className,
  ...props
}) {
  const classes = classNames('card-header-icon', className);

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

CardHeaderIcon.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
};

CardHeaderIcon.defaultProps = {
  className: undefined,
  children: null,
  component: 'div',
};
