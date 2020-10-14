import React from 'react';
import { render } from '@testing-library/react';

import Columns from './Columns';

describe('Columns', () => {
  test('renders', () => {
    render(<Columns />);
  });

  it('should have class .columns', () => {
    const { container }  = render(<Columns />);

    expect(container.firstChild).toHaveClass('columns');
  });
});
