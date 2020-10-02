import React from 'react';
import { shallow } from 'enzyme';

import Tags from './Tags';

const wrapper = shallow(<Tags />);

describe('<Tags />', () => {
  test('Renders as a <div> element', () => {
    expect(wrapper.type()).toEqual('div');
  });
});
