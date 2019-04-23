import { configure } from '@storybook/angular';

function loadStories() {
  require('../stories/index.js');
}

configure(loadStories, module);
