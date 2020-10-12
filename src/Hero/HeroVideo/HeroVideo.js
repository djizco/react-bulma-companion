import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function HeroVideo({
  children,
  className,
  transparent,
  ...props
}) {
  const classes = classNames('hero-video', className, {
    'is-transparent': transparent,
  });

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}

HeroVideo.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  transparent: PropTypes.bool,
};

HeroVideo.defaultProps = {
  className: undefined,
  children: null,
  transparent: false,
};
