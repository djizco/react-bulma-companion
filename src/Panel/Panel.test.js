import React from 'react';
import { render } from '@testing-library/react';

import Panel from './Panel';

describe('Panel', () => {
  test('renders', () => {
    render(<Panel />);
  });

  it('should have class .panel', () => {
    const { container }  = render(<Panel />);

    expect(container.firstChild).toHaveClass('panel');
  });
});
