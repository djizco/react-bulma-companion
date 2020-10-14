import React from 'react';
import { render } from '@testing-library/react';

import Message from './Message';

describe('Message', () => {
  test('renders', () => {
    render(<Message />);
  });

  it('should have class .message', () => {
    const { container }  = render(<Message />);

    expect(container.firstChild).toHaveClass('message');
  });
});
