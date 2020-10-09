import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function CardContent({
  children,
  className,
  ...props
}) {
  const cardContentClasses = classNames('card-content', className);

  return (
    <div className={cardContentClasses} {...props}>
      {children}
    </div>
  );
}

CardContent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

CardContent.defaultProps = {
  className: undefined,
  children: null,
};
