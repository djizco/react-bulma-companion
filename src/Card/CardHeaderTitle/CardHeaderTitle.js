import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function CardHeaderTitle({
  centered,
  children,
  className,
  ...props
}) {
  const cardHeaderTitleClasses = classNames('card-header-title', className, {
    'is-centered': centered,
  });

  return (
    <p className={cardHeaderTitleClasses} {...props}>
      {children}
    </p>
  );
}

CardHeaderTitle.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  centered: PropTypes.bool,
};

CardHeaderTitle.defaultProps = {
  className: undefined,
  children: null,
  centered: false,
};
