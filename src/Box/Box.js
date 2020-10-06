import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function Box({
  children,
  className,
  link,
  ...props
}) {
  const Element = link ? 'a' : 'div';
  const boxClasses = classNames('box', className);

  return (
    <Element className={boxClasses} {...props}>
      {children}
    </Element>
  );
}

Box.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  link: PropTypes.bool,
};

Box.defaultProps = {
  className: undefined,
  children: null,
  link: false,
};
