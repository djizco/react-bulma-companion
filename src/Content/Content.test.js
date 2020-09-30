import React from 'react';
import { shallow } from 'enzyme';

import Content from './Content';

const wrapper = shallow(<Content />);

describe('<Content />', () => {
  test('Renders as a <div> element', () => {
    expect(wrapper.type()).toEqual('div');
  });
});
