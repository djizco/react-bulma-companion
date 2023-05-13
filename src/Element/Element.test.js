import React from 'react';
import { render } from '@testing-library/react';

import Element from './Element';

describe('Element', () => {
  test('renders', () => {
    render(<Element />);
  });

  test('has passed in classname', () => {
    const { container } = render(<Element className="test" />);

    expect(container.getElementsByClassName('test').length).toBe(1);
  });
});
