import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Element from '../../Element';

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
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

HeroVideo.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
  transparent: PropTypes.bool,
};

HeroVideo.defaultProps = {
  className: undefined,
  children: null,
  component: 'div',
  transparent: false,
};
