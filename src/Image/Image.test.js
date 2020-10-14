import React from 'react';
import { render } from '@testing-library/react';

import Image from './Image';

describe('Image', () => {
  test('renders', () => {
    render(<Image />);
  });

  it('should have class .image', () => {
    const { container }  = render(<Image />);

    expect(container.firstChild).toHaveClass('image');
  });
});
