import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import MediaLeft from './MediaLeft';
import MediaRight from './MediaRight';
import MediaContent from './MediaContent';

export default function Media({
  children,
  className,
  ...props
}) {
  const mediaClasses = classNames('media', className);

  return (
    <article className={mediaClasses} {...props}>
      {children}
    </article>
  );
}

Media.Left = MediaLeft;
Media.Right = MediaRight;
Media.Content = MediaContent;

Media.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

Media.defaultProps = {
  className: undefined,
  children: null,
};
