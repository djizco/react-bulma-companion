import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import FieldLabel from './FieldLabel';
import FieldBody from './FieldBody';

export default function Field({
  align,
  addons,
  children,
  className,
  expanded,
  grouped,
  horizontal,
  multiline,
  narrow,
  ...props
}) {
  const fieldClasses = classNames('field', className, {
    'is-grouped': grouped,
    'has-addons': addons,
    'has-addons-centered': addons && align === 'center',
    'has-addons-right': addons && align === 'right',
    'is-grouped-centered': grouped && align === 'center',
    'is-grouped-right': grouped && align === 'right',
    'is-grouped-multiline': grouped && multiline,
    'is-horizontal': horizontal,
    'is-narrow': narrow,
  });

  return (
    <div className={fieldClasses} {...props}>
      {children}
    </div>
  );
}

Field.Label = FieldLabel;
Field.Body = FieldBody;

Field.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  grouped: PropTypes.bool,
  addons: PropTypes.bool,
  align: PropTypes.oneOf(['center', 'right']),
  multiline: PropTypes.bool,
  horizontal: PropTypes.bool,
  expanded: PropTypes.bool,
  narrow: PropTypes.bool,
};

Field.defaultProps = {
  className: undefined,
  children: null,
  grouped: false,
  addons: false,
  align: undefined,
  multiline: false,
  horizontal: false,
  expanded: false,
  narrow: false,
};
