import React from 'react';
import { render } from '@testing-library/react';

import Pagination from './Pagination';

describe('Pagination', () => {
  test('renders', () => {
    render(<Pagination />);
  });

  it('should have class .pagination', () => {
    const { container }  = render(<Pagination />);

    expect(container.firstChild).toHaveClass('pagination');
  });
});
