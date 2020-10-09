import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function HeroBody({
  children,
  className,
  ...props
}) {
  const classes = classNames('hero-body', className);

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}

HeroBody.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

HeroBody.defaultProps = {
  className: undefined,
  children: null,
};
