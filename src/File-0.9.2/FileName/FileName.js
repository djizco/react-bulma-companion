import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Element from '../../Element';

export default function FileName({
  children,
  className,
  ...props
}) {
  const classes = classNames('file-name', className);

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

FileName.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
};

FileName.defaultProps = {
  className: undefined,
  children: null,
  component: 'span',
};
