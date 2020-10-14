import React from 'react';
import { render } from '@testing-library/react';

import Section from './Section';

describe('Section', () => {
  test('renders', () => {
    render(<Section />);
  });

  it('should have class .section', () => {
    const { container }  = render(<Section />);

    expect(container.firstChild).toHaveClass('section');
  });
});
