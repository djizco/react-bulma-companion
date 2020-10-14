import React from 'react';
import { render } from '@testing-library/react';

import Input from './Input';

describe('Input', () => {
  test('renders', () => {
    render(<Input />);
  });

  it('should have class .input', () => {
    const { container }  = render(<Input />);

    expect(container.firstChild).toHaveClass('input');
  });
});
