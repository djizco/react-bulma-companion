import React from 'react';
import { shallow } from 'enzyme';

import Control from './Control';

const wrapper = shallow(<Control />);

describe('<Control />', () => {
  test('Renders as a <div> element', () => {
    expect(wrapper.type()).toEqual('div');
  });
});
