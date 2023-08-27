import React from 'react';
import { render } from '@testing-library/react';

import Breadcrumb from './Breadcrumb';

describe('Breadcrumb', () => {
  test('renders', () => {
    render(<Breadcrumb />);
  });

  it('should have class .breadcrumb', () => {
    const { container }  = render(<Breadcrumb />);

    expect(container.firstChild).toHaveClass('breadcrumb');
  });

  // Align
  it('should handle align center prop', () => {
    const { container }  = render(<Breadcrumb align="center" />);

    expect(container.firstChild).toHaveClass('is-centered');
  });

  it('should handle align right prop', () => {
    const { container }  = render(<Breadcrumb align="right" />);

    expect(container.firstChild).toHaveClass('is-right');
  });

  // Size
  it('should handle size small prop', () => {
    const { container }  = render(<Breadcrumb size="small" />);

    expect(container.firstChild).toHaveClass('is-small');
  });

  it('should handle size medium prop', () => {
    const { container }  = render(<Breadcrumb size="medium" />);

    expect(container.firstChild).toHaveClass('is-medium');
  });

  it('should handle size large prop', () => {
    const { container }  = render(<Breadcrumb size="large" />);

    expect(container.firstChild).toHaveClass('is-large');
  });

  // Separator
  it('should handle separator arrow prop', () => {
    const { container }  = render(<Breadcrumb separator="arrow" />);

    expect(container.firstChild).toHaveClass('has-arrow-separator');
  });

  it('should handle separator bullet prop', () => {
    const { container }  = render(<Breadcrumb separator="bullet" />);

    expect(container.firstChild).toHaveClass('has-bullet-separator');
  });

  it('should handle separator dot prop', () => {
    const { container }  = render(<Breadcrumb separator="dot" />);

    expect(container.firstChild).toHaveClass('has-dot-separator');
  });

  it('should handle separator succeeds prop', () => {
    const { container }  = render(<Breadcrumb separator="succeeds" />);

    expect(container.firstChild).toHaveClass('has-succeeds-separator');
  });

  it('should render a Breadcrumb List', () => {
    const { container } = render(
      <Breadcrumb>
        <Breadcrumb.List>
          <Breadcrumb.ListItem active><a>Item 1</a></Breadcrumb.ListItem>
          <Breadcrumb.ListItem><a>Item 2</a></Breadcrumb.ListItem>
          <Breadcrumb.ListItem><a>Item 3</a></Breadcrumb.ListItem>
        </Breadcrumb.List>
      </Breadcrumb>,
    );

    expect(container.getElementsByTagName('a')).toHaveLength(3);
  });
});
