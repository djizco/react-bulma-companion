import React from 'react';
import { render } from '@testing-library/react';

import Textarea from './Textarea';

describe('Textarea', () => {
  test('renders', () => {
    render(<Textarea />);
  });

  it('should have class .textarea', () => {
    const { container }  = render(<Textarea />);

    expect(container.firstChild).toHaveClass('textarea');
  });
});
