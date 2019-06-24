import React from 'react';
import { storiesOf } from '@storybook/react';

import { Cursor } from '../../../src/packages/rich_editor/components/Cursor/Cursor';

storiesOf('Cursor', module)
  .add('default', () => (
    <Cursor />
  ))