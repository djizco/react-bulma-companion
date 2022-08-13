import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Element from '../../Element';

const colors = [
  'white', 'black', 'light', 'dark',
  'primary', 'link', 'info', 'success', 'warning', 'danger',
  'black-bis', 'black-ter',
  'grey-dark', 'grey', 'grey-light', 'grey-lighter',
  'white-ter', 'white-bis',
  'primary-light', 'link-light', 'info-light', 'success-light', 'warning-light', 'danger-light',
  'primary-dark', 'link-dark', 'info-dark', 'success-dark', 'warning-dark', 'danger-dark',
];

export default function IconText({
  children,
  className,
  color,
  ...props
}) {
  const classes = classNames('icon-text', className, {
    [`has-text-${color}`]: !!color,
  });

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

IconText.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
  color: PropTypes.oneOfType([
    PropTypes.oneOf(colors),
    PropTypes.string,
  ]),
};

IconText.defaultProps = {
  className: undefined,
  children: null,
  color: undefined,
  component: 'span',
};
