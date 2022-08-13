import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Element from '../../Element';

export default function TableContainer({
  children,
  className,
  ...props
}) {
  const classes = classNames('table-container', className);

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

TableContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
};

TableContainer.defaultProps = {
  className: undefined,
  children: null,
  component: 'div',
};
