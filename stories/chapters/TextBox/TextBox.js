import React from 'react';
import { storiesOf } from '@storybook/react'

import { TextBox } from '../../../src/packages/rich_editor/components/TextBox';

storiesOf('TextBox', module)
  .add('With Value', () => (
    <TextBox value="Hey! I am the <TextBox />" />
  ))