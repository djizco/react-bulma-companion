import React from 'react';
import { render } from '@testing-library/react';

import Loader from './Loader';

describe('Loader', () => {
  test('renders', () => {
    render(<Loader />);
  });

  it('should have class .loader', () => {
    const { container }  = render(<Loader />);

    expect(container.firstChild).toHaveClass('loader');
  });
});
