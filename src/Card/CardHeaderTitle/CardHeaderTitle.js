import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Element from '../../Element';

export default function CardHeaderTitle({
  centered,
  children,
  className,
  ...props
}) {
  const classes = classNames('card-header-title', className, {
    'is-centered': centered,
  });

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

CardHeaderTitle.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
  centered: PropTypes.bool,
};

CardHeaderTitle.defaultProps = {
  className: undefined,
  children: null,
  component: 'p',
  centered: false,
};
