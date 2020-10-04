import React from 'react';
import { shallow } from 'enzyme';

import Field from './Field';

const wrapper = shallow(<Field />);

describe('<Field />', () => {
  test('Renders as a <div> element', () => {
    expect(wrapper.type()).toEqual('div');
  });
});
