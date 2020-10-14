import React from 'react';
import { render } from '@testing-library/react';

import Field from './Field';

describe('Field', () => {
  test('renders', () => {
    render(<Field />);
  });

  it('should have class .field', () => {
    const { container }  = render(<Field />);

    expect(container.firstChild).toHaveClass('field');
  });
});
