import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Element from '../../Element';

export default function CardImage({
  children,
  className,
  ...props
}) {
  const classes = classNames('card-image', className);

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

CardImage.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
};

CardImage.defaultProps = {
  className: undefined,
  children: null,
  component: 'div',
};
