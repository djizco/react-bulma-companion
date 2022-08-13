import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import MediaLeft from './MediaLeft';
import MediaRight from './MediaRight';
import MediaContent from './MediaContent';

import Element from '../Element';

export default function Media({
  children,
  className,
  ...props
}) {
  const classes = classNames('media', className);

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

Media.Left = MediaLeft;
Media.Right = MediaRight;
Media.Content = MediaContent;

Media.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
};

Media.defaultProps = {
  className: undefined,
  children: null,
  component: 'article',
};
