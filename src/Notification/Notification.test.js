import React from 'react';
import { render } from '@testing-library/react';

import Notification from './Notification';

describe('Notification', () => {
  test('renders', () => {
    render(<Notification />);
  });

  it('should have class .notification', () => {
    const { container }  = render(<Notification />);

    expect(container.firstChild).toHaveClass('notification');
  });
});
