import React from 'react';
import { render } from '@testing-library/react';

import File from './File';

describe('File', () => {
  test('renders', () => {
    render(<File />);
  });

  it('should have class .file', () => {
    const { container }  = render(<File />);

    expect(container.firstChild).toHaveClass('file');
  });
});
