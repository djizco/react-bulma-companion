import React from 'react';
import { shallow } from 'enzyme';

import Buttons from './Buttons';

const wrapper = shallow(<Buttons />);

describe('<Buttons />', () => {
  test('Renders as a <div> element', () => {
    expect(wrapper.type()).toEqual('div');
  });
});
