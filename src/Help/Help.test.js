import React from 'react';
import { render } from '@testing-library/react';

import Help from './Help';

describe('Help', () => {
  test('renders', () => {
    render(<Help />);
  });

  it('should have class .help', () => {
    const { container }  = render(<Help />);

    expect(container.firstChild).toHaveClass('help');
  });
});
