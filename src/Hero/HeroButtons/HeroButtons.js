import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function HeroButtons({
  children,
  className,
  ...props
}) {
  const classes = classNames('hero-buttons', className);

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}

HeroButtons.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

HeroButtons.defaultProps = {
  className: undefined,
  children: null,
};
