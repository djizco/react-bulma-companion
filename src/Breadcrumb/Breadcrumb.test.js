import React from 'react';
import { shallow } from 'enzyme';

import Breadcrumb from './Breadcrumb';

const wrapper = shallow(<Breadcrumb />);

describe('<Breadcrumb />', () => {
  test('Renders as a <nav> element by default', () => {
    expect(wrapper.type()).toEqual('nav');
  });
});
