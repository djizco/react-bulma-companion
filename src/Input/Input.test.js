import React from 'react';
import { shallow } from 'enzyme';

import Input from './Input';

const wrapper = shallow(<Input />);

describe('<Input />', () => {
  test('Renders as a <input> element', () => {
    expect(wrapper.type()).toEqual('input');
  });
});
