import React from 'react';
import { shallow } from 'enzyme';

import Tag from './Tag';

const wrapper = shallow(<Tag />);

describe('<Tag />', () => {
  test('Renders as a <span> element', () => {
    expect(wrapper.type()).toEqual('span');
  });
});
