import React from 'react';
import { shallow } from 'enzyme';

import Notification from './Notification';

const wrapper = shallow(<Notification />);

describe('<Notification />', () => {
  test('Renders as a <div> element', () => {
    expect(wrapper.type()).toEqual('div');
  });
});
