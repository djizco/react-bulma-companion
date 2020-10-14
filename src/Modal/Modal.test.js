import React from 'react';
import { render } from '@testing-library/react';

import Modal from './Modal';

describe('Modal', () => {
  test('renders', () => {
    render(<Modal />);
  });

  it('should have class .modal', () => {
    const { container }  = render(<Modal />);

    expect(container.firstChild).toHaveClass('modal');
  });
});
