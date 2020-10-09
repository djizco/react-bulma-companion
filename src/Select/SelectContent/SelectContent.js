import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

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
    <select className={classes} {...props}>
      {children}
    </select>
  );
}

SelectContent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  hovered: PropTypes.bool,
  focused: PropTypes.bool,
  active: PropTypes.bool,
};

SelectContent.defaultProps = {
  className: undefined,
  children: null,
  hovered: false,
  focused: false,
  active: false,
};
