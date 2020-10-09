import React from 'react';
import PropTypes from 'prop-types';

export default function MenuListItem({
  children,
  className,
  ...props
}) {
  return (
    <li className={className} {...props}>
      {children}
    </li>
  );
}

MenuListItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

MenuListItem.defaultProps = {
  className: undefined,
  children: null,
};
