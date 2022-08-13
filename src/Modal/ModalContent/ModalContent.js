import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Element from '../../Element';

export default function ModalContent({
  children,
  className,
  ...props
}) {
  const classes = classNames('modal-content', className);

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

ModalContent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
};

ModalContent.defaultProps = {
  className: undefined,
  children: null,
  component: 'div',
};
