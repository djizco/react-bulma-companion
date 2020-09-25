import React from 'react';
import { shallow } from 'enzyme';

import Block from './Block';

const wrapper = shallow(<Block />);

describe('<Block />', () => {
  test('Renders as a <div> element', () => {
    expect(wrapper.type()).toEqual('div');
  });
});
