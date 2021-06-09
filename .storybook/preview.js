import { addDecorator, addParameters } from '@storybook/vue';
import { withKnobs } from '@storybook/addon-knobs';
import {
  INITIAL_VIEWPORTS,
  // or MINIMAL_VIEWPORTS,
} from '@storybook/addon-viewport';

addDecorator(withKnobs);

addParameters({
    a11y: {
        element: '#root',
        config: {},
        options: {},
        manual: true,
    },
    viewport: {
        viewports: {...INITIAL_VIEWPORTS}, // https://github.com/storybookjs/storybook/tree/master/addons/viewport
    },
});
