import React from 'react';
import { render } from '@testing-library/react';

import Breadcrumb from './Breadcrumb';

describe('Breadcrumb', () => {
  test('renders', () => {
    render(<Breadcrumb />);
  });

  it('should have class .breadcrumb', () => {
    const { container }  = render(<Breadcrumb />);

    expect(container.firstChild).toHaveClass('breadcrumb');
  });
});
