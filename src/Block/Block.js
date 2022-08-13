import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Element from '../Element';

export default function Block({
  children,
  className,
  ...props
}) {
  const classes = classNames('block', className);

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

Block.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
};

Block.defaultProps = {
  className: undefined,
  children: null,
  component: 'div',
};
