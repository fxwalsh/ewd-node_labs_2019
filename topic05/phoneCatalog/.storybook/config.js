import { configure, addDecorator } from '@storybook/react';

function loadStories() {
  require('../stories/phoneApp.js');
}

configure(loadStories, module);