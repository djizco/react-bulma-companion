import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Element from '../../Element';

export default function MediaRight({
  children,
  className,
  ...props
}) {
  const classes = classNames('media-right', className);

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

MediaRight.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
};

MediaRight.defaultProps = {
  className: undefined,
  children: null,
  component: 'div',
};
