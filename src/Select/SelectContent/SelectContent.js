import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Element from '../../Element';

export default function SelectContent({
  active,
  children,
  className,
  focused,
  hovered,
  ...props
}) {
  const classes = classNames(className, {
    'is-hovered': hovered,
    'is-focused': focused,
    'is-active': active,
  });

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

SelectContent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
  hovered: PropTypes.bool,
  focused: PropTypes.bool,
  active: PropTypes.bool,
};

SelectContent.defaultProps = {
  className: undefined,
  children: null,
  component: 'select',
  hovered: false,
  focused: false,
  active: false,
};
