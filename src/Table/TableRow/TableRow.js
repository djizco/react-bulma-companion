import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Element from '../../Element';

export default function TableRow({
  children,
  className,
  selected,
  ...props
}) {
  const classes = classNames(className, {
    'is-selected': selected,
  });

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

TableRow.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
  selected: PropTypes.bool,
};

TableRow.defaultProps = {
  className: undefined,
  children: null,
  component: 'tr',
  selected: false,
};
