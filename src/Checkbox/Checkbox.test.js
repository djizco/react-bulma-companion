import React from 'react';
import { render } from '@testing-library/react';

import Checkbox from './Checkbox';

describe('Checkbox', () => {
  test('renders', () => {
    render(<Checkbox />);
  });

  it('should have class .checkbox', () => {
    const { container }  = render(<Checkbox />);

    expect(container.firstChild).toHaveClass('checkbox');
  });
});
