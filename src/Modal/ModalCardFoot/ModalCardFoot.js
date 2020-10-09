import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function ModalCardFoot({
  children,
  className,
  ...props
}) {
  const classes = classNames('modal-card-foot', className);

  return (
    <footer className={classes} {...props}>
      {children}
    </footer>
  );
}

ModalCardFoot.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

ModalCardFoot.defaultProps = {
  className: undefined,
  children: null,
};
