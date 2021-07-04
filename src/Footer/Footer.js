import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function Footer({
  children,
  className,
  component,
  ...props
}) {
  const Element = component;

  const classes = classNames('footer', className);

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

Footer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
};

Footer.defaultProps = {
  className: undefined,
  children: null,
  component: 'footer',
};
