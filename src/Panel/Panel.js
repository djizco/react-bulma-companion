import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import PanelBlock from './PanelBlock';
import PanelHeading from './PanelHeading';
import PanelIcon from './PanelIcon';
import PanelTab from './PanelTab';
import PanelTabs from './PanelTabs';

export default function Panel({
  children,
  className,
  color,
  component,
  ...props
}) {
  const Element = component;

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

  const classes = classNames('panel', className, isColor);

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

Panel.Block = PanelBlock;
Panel.Heading = PanelHeading;
Panel.Icon = PanelIcon;
Panel.Tab = PanelTab;
Panel.Tabs = PanelTabs;

Panel.propTypes = {
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
};

Panel.defaultProps = {
  className: undefined,
  children: null,
  component: 'nav',
  color: undefined,
};
