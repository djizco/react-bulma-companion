import React from 'react';
import { render } from '@testing-library/react';

import Box from './Box';

describe('Box', () => {
  it('renders', () => {
    render(<Box />);
  });

  it('should have class .box', () => {
    const { container }  = render(<Box />);

    expect(container.firstChild).toHaveClass('box');
  });

  it('should render children', () => {
    const { getByText }  = render(
      <Box>
        <p>Test</p>
      </Box>,
    );

    expect(getByText('Test')).toBeInTheDocument();
  });

  it('should render as a custom component', () => {
    const { container }  = render(<Box component="span" />);

    expect(container.firstChild.tagName).toBe('SPAN');
  });
});
