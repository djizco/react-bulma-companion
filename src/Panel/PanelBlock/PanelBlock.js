import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function PanelBlock({
  active,
  children,
  className,
  label,
  link,
  wrapped,
  ...props
}) {
  const Element = link
    ? 'a'
    : label
      ? 'label'
      : 'div';

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
  link: PropTypes.bool,
  label: PropTypes.bool,
  active: PropTypes.bool,
  wrapped: PropTypes.bool,
};

PanelBlock.defaultProps = {
  className: undefined,
  children: null,
  link: false,
  label: false,
  active: false,
  wrapped: false,
};
