import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function CardHeaderIcon({
  children,
  className,
  link,
  ...props
}) {
  const Element = link ? 'a' : 'div';

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
  link: PropTypes.bool,
};

CardHeaderIcon.defaultProps = {
  className: undefined,
  children: null,
  link: false,
};