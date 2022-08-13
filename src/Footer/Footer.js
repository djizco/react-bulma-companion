import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Element from '../Element';

export default function Footer({
  children,
  className,
  ...props
}) {
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
