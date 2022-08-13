import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Element from '../../Element';

export default function CardFooter({
  children,
  className,
  ...props
}) {
  const classes = classNames('card-footer', className);

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

CardFooter.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
};

CardFooter.defaultProps = {
  className: undefined,
  children: null,
  component: 'footer',
};
