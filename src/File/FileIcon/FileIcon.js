import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Element from '../../Element';

export default function FileIcon({
  children,
  className,
  ...props
}) {
  const classes = classNames('file-icon', className);

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

FileIcon.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
};

FileIcon.defaultProps = {
  className: undefined,
  children: null,
  component: 'span',
};
