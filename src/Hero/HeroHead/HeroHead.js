import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function HeroHead({
  children,
  className,
  ...props
}) {
  const classes = classNames('hero-head', className);

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}

HeroHead.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

HeroHead.defaultProps = {
  className: undefined,
  children: null,
};
