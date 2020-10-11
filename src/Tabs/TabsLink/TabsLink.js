import React from 'react';
import PropTypes from 'prop-types';

export default function TabsLink({
  children,
  className,
  ...props
}) {
  return (
    <a className={className} {...props}>
      {children}
    </a>
  );
}

TabsLink.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

TabsLink.defaultProps = {
  className: undefined,
  children: null,
};
