import { configure } from '@storybook/react';

const req = require.context('../stories/chapters', true, /.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);