import React from 'react';
import { render } from '@testing-library/react';

import Footer from './Footer';

describe('Footer', () => {
  test('renders', () => {
    render(<Footer />);
  });

  it('should have class .footer', () => {
    const { container }  = render(<Footer />);

    expect(container.firstChild).toHaveClass('footer');
  });
});
