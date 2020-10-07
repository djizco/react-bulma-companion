import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function SelectContent({
  children,
  className,
  ...props
}) {
  const selectContentClasses = classNames(className);

  return (
    <option className={selectContentClasses} {...props}>
      {children}
    </option>
  );
}

SelectContent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  selected: PropTypes.bool,
};

SelectContent.defaultProps = {
  className: undefined,
  children: null,
  selected: false,
};
