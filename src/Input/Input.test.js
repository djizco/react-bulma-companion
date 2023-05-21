import React from 'react';
import { render } from '@testing-library/react';

import Input from './Input';

describe('Input', () => {
  test('renders', () => {
    render(<Input />);
  });

  it('should have class .input', () => {
    const { container }  = render(<Input />);

    expect(container.firstChild).toHaveClass('input');
  });

  it('should inherit classes from Element', () => {
    const { container }  = render(<Input backgroundColor="primary" textColor="secondary" />);

    expect(container.firstChild).toHaveClass('has-background-primary');
    expect(container.firstChild).toHaveClass('has-text-secondary');
  });

  it('should add the small size class', () => {
    const { container }  = render(<Input size="small" />);

    expect(container.firstChild).toHaveClass('is-small');
  });

  it('should add the medium size class', () => {
    const { container }  = render(<Input size="medium" />);

    expect(container.firstChild).toHaveClass('is-medium');
  });

  it('should add the medium size class', () => {
    const { container }  = render(<Input size="medium" />);

    expect(container.firstChild).toHaveClass('is-medium');
  });
});
