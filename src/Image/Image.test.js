import React from 'react';
import { shallow } from 'enzyme';

import Image from './Image';

const wrapper = shallow(<Image />);

describe('<Image />', () => {
  test('Renders as an <figure> element', () => {
    expect(wrapper.type()).toEqual('figure');
  });
});
