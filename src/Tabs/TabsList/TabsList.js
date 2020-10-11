import React from 'react';
import PropTypes from 'prop-types';

export default function TabsList({
  children,
  className,
  ...props
}) {
  return (
    <ul className={className} {...props}>
      {children}
    </ul>
  );
}

TabsList.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

TabsList.defaultProps = {
  className: undefined,
  children: null,
};
