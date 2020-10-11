import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function NavbarDivider({
  className,
  ...props
}) {
  const classes = classNames('navbar-divider', className);

  return (
    <hr className={classes} {...props} />
  );
}

NavbarDivider.propTypes = {
  className: PropTypes.string,
};

NavbarDivider.defaultProps = {
  className: undefined,
};
