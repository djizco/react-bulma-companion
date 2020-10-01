import React from 'react';
import { shallow } from 'enzyme';

import Icon from './Icon';

const wrapper = shallow(<Icon />);

describe('<Icon />', () => {
  test('Renders as an <span> element', () => {
    expect(wrapper.type()).toEqual('span');
  });
});
