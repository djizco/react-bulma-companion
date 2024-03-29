import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Element from '../../Element';

export default function FileCTA({
  children,
  className,
  ...props
}) {
  const classes = classNames('file-cta', className);

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

FileCTA.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
};

FileCTA.defaultProps = {
  className: undefined,
  children: null,
  component: 'span',
};
