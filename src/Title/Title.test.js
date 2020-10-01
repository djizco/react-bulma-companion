import React from 'react';
import { shallow } from 'enzyme';

import Title from './Title';

const wrapper = shallow(<Title />);

describe('<Title />', () => {
  test('Renders as a <p> element', () => {
    expect(wrapper.type()).toEqual('p');
  });
});
