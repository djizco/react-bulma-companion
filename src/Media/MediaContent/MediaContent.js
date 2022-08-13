import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Element from '../../Element';

export default function MediaContent({
  children,
  className,
  ...props
}) {
  const classes = classNames('media-content', className);

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

MediaContent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
};

MediaContent.defaultProps = {
  className: undefined,
  children: null,
  component: 'div',
};
