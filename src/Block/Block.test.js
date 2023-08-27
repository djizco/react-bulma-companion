import React from 'react';
import { render } from '@testing-library/react';

import Block from './Block';

describe('Block', () => {
  it('renders', () => {
    render(<Block />);
  });

  it('should have class .block', () => {
    const { container }  = render(<Block />);

    expect(container.firstChild).toHaveClass('block');
  });

  it('should render children', () => {
    const { getByText }  = render(
      <Block>
        <p>Test</p>
      </Block>,
    );

    expect(getByText('Test')).toBeInTheDocument();
  });

  it('should render as a custom component', () => {
    const { container }  = render(<Block component="span" />);

    expect(container.firstChild.tagName).toBe('SPAN');
  });
});
