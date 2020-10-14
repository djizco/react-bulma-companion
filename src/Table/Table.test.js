import React from 'react';
import { render } from '@testing-library/react';

import Table from './Table';

describe('Table', () => {
  test('renders', () => {
    render(<Table />);
  });

  it('should have class .table', () => {
    const { container }  = render(<Table />);

    expect(container.firstChild).toHaveClass('table');
  });
});
