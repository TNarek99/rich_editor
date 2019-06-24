import { configure } from '@storybook/react';

const requireStories = require.context('../stories/chapters', true, /.js$/);

function loadStories() {
  requireStories.keys().forEach(requireStories);
}

configure(loadStories, module);