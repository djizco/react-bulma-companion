import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Element from '../../Element';

export default function FileText({
  children,
  className,
  ...props
}) {
  const classes = classNames('file-label', className);

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

FileText.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
};

FileText.defaultProps = {
  className: undefined,
  children: null,
  component: 'span',
};
