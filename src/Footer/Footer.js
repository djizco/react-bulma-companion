import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function Footer({
  children,
  className,
  ...props
}) {
  const footerClasses = classNames('footer', className);

  return (
    <footer className={footerClasses} {...props}>
      {children}
    </footer>
  );
}

Footer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

Footer.defaultProps = {
  className: undefined,
  children: null,
};
