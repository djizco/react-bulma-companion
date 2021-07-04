import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function CardHeaderTitle({
  centered,
  children,
  className,
  component,
  ...props
}) {
  const Element = component;

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
