import { addDecorator, addParameters } from '@storybook/vue';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import {
  INITIAL_VIEWPORTS,
  // or MINIMAL_VIEWPORTS,
} from '@storybook/addon-viewport';

import Vue from 'vue';
import BasModalPlugin from '../src/components/BasModal/src';

addDecorator(withA11y);
addDecorator(withKnobs);

addParameters({
  viewport: {
    viewports: {...INITIAL_VIEWPORTS}, // https://github.com/storybookjs/storybook/tree/master/addons/viewport
  },
});

// Add plugins to Vue
Vue.use(BasModalPlugin);
