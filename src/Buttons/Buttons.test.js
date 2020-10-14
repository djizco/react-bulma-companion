import React from 'react';
import { render } from '@testing-library/react';

import Buttons from './Buttons';

describe('Buttons', () => {
  test('renders', () => {
    render(<Buttons />);
  });

  it('should have class .buttons', () => {
    const { container }  = render(<Buttons />);

    expect(container.firstChild).toHaveClass('buttons');
  });
});
