import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Element from '../Element';

export default function Heading({
  children,
  className,
  ...props
}) {
  const classes = classNames('heading', className);

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

Heading.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
};

Heading.defaultProps = {
  className: undefined,
  children: null,
  component: 'p',
};
