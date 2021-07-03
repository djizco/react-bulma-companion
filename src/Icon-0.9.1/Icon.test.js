import React from 'react';
import { render } from '@testing-library/react';

import Icon from './Icon';

describe('Icon', () => {
  test('renders', () => {
    render(<Icon />);
  });

  it('should have class .icon', () => {
    const { container }  = render(<Icon />);

    expect(container.firstChild).toHaveClass('icon');
  });
});
