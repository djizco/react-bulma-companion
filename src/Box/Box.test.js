import React from 'react';
import { shallow } from 'enzyme';

import Box from './Box';

const wrapper = shallow(<Box />);

describe('<Box />', () => {
  test('Renders as a <div> element', () => {
    expect(wrapper.type()).toEqual('div');
  });
});
