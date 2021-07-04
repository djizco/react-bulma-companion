import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function PanelBlock({
  active,
  children,
  className,
  component,
  label,
  link,
  wrapped,
  ...props
}) {
  if (process.env.NODE_ENV === 'development' && link) {
    // eslint-disable-next-line
    console.warn('Using the `link` prop is deprecated. Use `component="a"` instead.');
  }

  if (process.env.NODE_ENV === 'development' && label) {
    // eslint-disable-next-line
    console.warn('Using the `label` prop is deprecated. Use `component="label"` instead.');
  }

  const Element = link
    ? 'a'
    : label
      ? 'label'
      : component;

  const classes = classNames('panel-block', className, {
    'is-active': active,
    'is-wrapped': wrapped,
  });

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

PanelBlock.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
  /**
    Deprecation Warning: Use `component="a"`.
  */
  link: PropTypes.bool,
  /**
    Deprecation Warning: Use `component="label"`.
  */
  label: PropTypes.bool,
  active: PropTypes.bool,
  wrapped: PropTypes.bool,
};

PanelBlock.defaultProps = {
  className: undefined,
  children: null,
  component: 'div',
  link: false,
  label: false,
  active: false,
  wrapped: false,
};
