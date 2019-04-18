import { configure } from '@storybook/angular';
import { withInfo } from '@storybook/addon-info';

function loadStories() {
  require('../stories/index.js');
  // You can require as many stories as you need.
}

addDecorator(withInfo);
configure(loadStories, module);
