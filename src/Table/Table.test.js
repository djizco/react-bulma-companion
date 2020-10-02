import React from 'react';
import { shallow } from 'enzyme';

import Table from './Table';

const wrapper = shallow(<Table />);

describe('<Table />', () => {
  test('Renders as a <table> element by default', () => {
    expect(wrapper.type()).toEqual('table');
  });
});
