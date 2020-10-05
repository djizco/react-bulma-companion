import React from 'react';
import { shallow } from 'enzyme';

import Label from './Label';

const wrapper = shallow(<Label />);

describe('<Label />', () => {
  test('Renders as a <label> element', () => {
    expect(wrapper.type()).toEqual('label');
  });
});
