import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function HeroFoot({
  children,
  className,
  ...props
}) {
  const heroFootClasses = classNames('hero-foot', className);

  return (
    <div className={heroFootClasses} {...props}>
      {children}
    </div>
  );
}

HeroFoot.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

HeroFoot.defaultProps = {
  className: undefined,
  children: null,
};
