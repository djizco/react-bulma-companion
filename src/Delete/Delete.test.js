import React from 'react';
import { render } from '@testing-library/react';

import Delete from './Delete';

describe('Delete', () => {
  test('renders', () => {
    render(<Delete />);
  });

  it('should have class .delete', () => {
    const { container }  = render(<Delete />);

    expect(container.firstChild).toHaveClass('delete');
  });
});
