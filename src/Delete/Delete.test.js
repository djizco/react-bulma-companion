import React from 'react';
import { shallow } from 'enzyme';

import Delete from './Delete';

const wrapper = shallow(<Delete />);

describe('<Delete />', () => {
  test('Renders as an <a> element', () => {
    expect(wrapper.type()).toEqual('a');
  });
});
