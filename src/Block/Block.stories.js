import React from 'react';

import Block from './Block';

export default {
  title: 'Elements/Block',
  component: Block,
};

export const Basic = {
  render: (params) => (
    <div>
      <Block>This text is within a <strong>block</strong>.</Block>
      <Block>
        This text is within a <strong>second block</strong>
        . Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
      </Block>
      <Block>This text is within a <strong>third block</strong>. This block has no margin at the bottom.</Block>
    </div>
  ),
};
