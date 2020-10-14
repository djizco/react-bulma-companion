import React from 'react';
import { render } from '@testing-library/react';

import Select from './Select';

describe('Select', () => {
  test('renders', () => {
    render(<Select />);
  });

  it('should have class .select', () => {
    const { container }  = render(<Select />);

    expect(container.firstChild).toHaveClass('select');
  });
});
