import React from 'react';
import { storiesOf } from '@storybook/react';

import { RichEditor } from '../../../src/packages/rich_editor/RichEditor';

storiesOf('RichEditor', module)
  .add('default', () => (
    <RichEditor />
  ))