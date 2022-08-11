import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function Element({
  children,
  className,
  component,
  domRef,
  textAlign,
  ...props
}) {
  const Element = component;

  // Text Align
  const textAlignMap = {
    center: 'has-text-centered',
    justify: 'has-text-justifyed',
    left: 'has-text-left',
    right: 'has-text-right',
  };
  const isTextAlign = textAlign && textAlignMap[textAlign];

  const classes = classNames(className, isTextAlign);

  return (
    <Element ref={domRef} className={classes} {...props}>
      {children}
    </Element>
  );
}

Element.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node,
  component: PropTypes.elementType.isRequired,
  domRef: PropTypes.object, // Verify (ElementType?)
  textAlign: PropTypes.oneOf(['center', 'justify', 'left', 'right']),
};

Element.defaultProps = {
  children: null,
  domRef: undefined,
  textAlign: undefined,
};
