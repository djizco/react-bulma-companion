import React from 'react';
import { shallow } from 'enzyme';

import Progress from './Progress';

const wrapper = shallow(<Progress />);

describe('<Progress />', () => {
  test('Renders as a <progress> element', () => {
    expect(wrapper.type()).toEqual('progress');
  });
});
