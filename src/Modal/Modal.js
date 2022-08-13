import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import ModalBackground from './ModalBackground';
import ModalCard from './ModalCard';
import ModalCardBody from './ModalCardBody';
import ModalCardFoot from './ModalCardFoot';
import ModalCardHead from './ModalCardHead';
import ModalCardTitle from './ModalCardTitle';
import ModalClose from './ModalClose';
import ModalContent from './ModalContent';

import Element from '../Element';

export default function Modal({
  active,
  children,
  className,
  ...props
}) {
  const classes = classNames('modal', className, {
    'is-active': active,
  });

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

Modal.Background = ModalBackground;
Modal.Card = ModalCard;
Modal.CardBody = ModalCardBody;
Modal.CardFoot = ModalCardFoot;
Modal.CardHead = ModalCardHead;
Modal.CardTitle = ModalCardTitle;
Modal.Close = ModalClose;
Modal.Content = ModalContent;

Modal.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
  active: PropTypes.bool,
};

Modal.defaultProps = {
  className: undefined,
  children: null,
  component: 'div',
  active: false,
};
