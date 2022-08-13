import React from 'react';
import { render } from '@testing-library/react';

import Element from './Element';

describe('Element', () => {
  test('renders', () => {
    render(<Element />);
  });
});
