import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function Section({
  children,
  className,
  size,
  ...props
}) {
  const sizeMap = {
    medium: 'is-medium',
    large: 'is-large',
  };
  const isSize = size && sizeMap[size];

  const sectionClasses = classNames('section', className, isSize);

  return (
    <section className={sectionClasses} {...props}>
      {children}
    </section>
  );
}

Section.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.oneOf(['medium', 'large']),
};

Section.defaultProps = {
  className: undefined,
  children: null,
  size: undefined,
};
