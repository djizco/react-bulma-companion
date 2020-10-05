import React from 'react';
import { shallow } from 'enzyme';

import Help from './Help';

const wrapper = shallow(<Help />);

describe('<Help />', () => {
  test('Renders as a <p> element', () => {
    expect(wrapper.type()).toEqual('p');
  });
});
