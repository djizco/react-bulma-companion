import React, { useState } from 'react';

import Columns from './Columns';
import Column from './Column';

import Field from './Field';
import Input from './Input';
import Label from './Label';

export default function Test() {
  const [value, setValue] = useState('');

  return (
    <Columns touch={{ gap: '1' }}>
      <Column mobile={{ size: '1' }}>
        <Field>
          <Label htmlFor="html" />
          <Input id="html" value={value} onChange={(e) => setValue(e.target.value)} />
        </Field>
      </Column>
    </Columns>
  );
}
