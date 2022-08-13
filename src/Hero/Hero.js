import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import HeroHead from './HeroHead';
import HeroBody from './HeroBody';
import HeroFoot from './HeroFoot';
import HeroVideo from './HeroVideo';
import HeroButtons from './HeroButtons';

import Element from '../Element';

export default function Hero({
  bold,
  children,
  className,
  color,
  size,
  ...props
}) {
  // Colors
  const colorMap = {
    primary: 'is-primary',
    link: 'is-link',
    info: 'is-info',
    success: 'is-success',
    warning: 'is-warning',
    danger: 'is-danger',
    white: 'is-white',
    black: 'is-black',
    light: 'is-light',
    dark: 'is-dark',
  };
  const isColor = color && colorMap[color];

  // Sizes
  const sizeMap = {
    small: 'is-small',
    medium: 'is-medium',
    large: 'is-large',
    halfheight: 'is-halfheight',
    fullheight: 'is-fullheight',
    'fullheight-navbar': 'is-fullheight-with-navbar',
  };
  const isSize = size && sizeMap[size];

  const classes = classNames('hero', className, isColor, isSize, {
    'is-bold': bold,
  });

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

Hero.Head = HeroHead;
Hero.Body = HeroBody;
Hero.Foot = HeroFoot;
Hero.Video = HeroVideo;
Hero.Buttons = HeroButtons;

Hero.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
  color: PropTypes.oneOf([
    'primary',
    'link',
    'info',
    'success',
    'warning',
    'danger',
    'white',
    'black',
    'light',
    'dark',
  ]),
  size: PropTypes.oneOf([
    'small',
    'medium',
    'large',
    'halfheight',
    'fullheight',
    'fullheight-navbar',
  ]),
  bold: PropTypes.bool,
};

Hero.defaultProps = {
  className: undefined,
  children: null,
  component: 'section',
  color: undefined,
  size: undefined,
  bold: false,
};
