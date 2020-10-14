import React from 'react';
import { render } from '@testing-library/react';

import Button from './Button';

describe('Button', () => {
  test('renders', () => {
    render(<Button />);
  });

  it('should have class .button', () => {
    const { container }  = render(<Button />);

    expect(container.firstChild).toHaveClass('button');
  });
});
