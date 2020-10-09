import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import CardContent from './CardContent';
import CardFooter from './CardFooter';
import CardFooterItem from './CardFooterItem';
import CardHeader from './CardHeader';
import CardHeaderIcon from './CardHeaderIcon';
import CardHeaderTitle from './CardHeaderTitle';
import CardImage from './CardImage';

export default function Card({
  children,
  className,
  ...props
}) {
  const classes = classNames('card', className);

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}

Card.Content = CardContent;
Card.Footer = CardFooter;
Card.FooterItem = CardFooterItem;
Card.Header = CardHeader;
Card.HeaderIcon = CardHeaderIcon;
Card.HeaderTitle = CardHeaderTitle;
Card.Image = CardImage;

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

Card.defaultProps = {
  className: undefined,
  children: null,
};
