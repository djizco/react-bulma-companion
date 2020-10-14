import React from 'react';
import { render } from '@testing-library/react';

import Label from './Label';

describe('Label', () => {
  test('renders', () => {
    render(<Label />);
  });

  it('should have class .label', () => {
    const { container }  = render(<Label />);

    expect(container.firstChild).toHaveClass('label');
  });
});
