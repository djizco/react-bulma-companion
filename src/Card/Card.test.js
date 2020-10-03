import React from 'react';
import { shallow } from 'enzyme';

import Card from './Card';

const wrapper = shallow(<Card />);

describe('<Card />', () => {
  test('Renders as a <div> element', () => {
    expect(wrapper.type()).toEqual('div');
  });
});
