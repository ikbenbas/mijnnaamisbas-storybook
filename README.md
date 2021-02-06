[![Storybook](https://img.shields.io/badge/build%20with-storybook-ff2c74.svg)](https://storybook.js.org/)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)
[![VueJS](https://img.shields.io/badge/powered%20by-vue-40b983.svg)](https://vuejs.org/)

# VueJS Component Library
Welcome to [Storybook](https://storybook.js.org/). This is a UI component development environment and playground
for our [VueJS](https://vuejs.org/) components.

All stories are written with [MDX Syntax](https://storybook.js.org/docs/formats/mdx-syntax/)
using [JSX](https://reactjs.org/docs/introducing-jsx.html) for displaying previews of the components
and adding [Markdown](https://www.markdownguide.org/getting-started/) support for writing clean, readable documentation.

## Installation
Start by installing all dependencies:

`$ npm install`

Start Storybook with:

`$ npm run storybook`

## Conventions for creating VueJS components
 - First of all, there is a command `$ npm run generate:vue ComponentName` which generates a new component and all needed files.
 - Each component has it's own folder in the `/src/components/` directory with a `src` folder, and package.json
 - Folder names are CamelCase and **must** start with the `Bas` prefix e.g. `BasExample`
 - Create the main component in the `src` directory within newly created folder. This file should have the same name as the folder e.g. `BasExample.vue`.
 The path to your file should look similar to `/src/components/BasExample/src/BasExample.vue`.
 - Within this folder you can create one or more VueJS child components, using the same naming convention e.g. `BasExampleChild.vue`

The `package.json` needs at least the properties as defined below. Change the `BasExample` to the naming of your own component.

```
{
  "name": "@basman/bas-example",
  "version": "0.0.0",
  "author": "Bas van Wouwen",
  "keywords": [
    "Vue",
    "VueJS",
  ],
  "description": "VueJS component for a happy coding experience",
  "license": "MIT",
  "publishConfig": {
    "access": "public"
  },
  "main": "./dist/BasExample.umd.js",
  "unpkg": "./dist/BasExample.min.js",
  "browser": {
    "./sfc": "./src/BasExample.vue"
  },
  "scripts": {
    "build-package": "vue-cli-service build --target lib --name BasExample ./src/BasExample.vue",
  },
}
```

The `name` property value **must** start with the `@basman/` scope and the author name should be `Bas van Wouwen`.

## Writing stories
 - First of all, there is a command `$ npm run generate:vue-story ComponentName` which generates a new story for the given components
 - For each main VueJS component you have to create a `.stories.mdx` file in the `/src/stories/` directory
 - The filename should be a lowercase hyphenated string of the CamelCase component name e.g. `bas-example.stories.mdx`

## Start developing
In your `stories.mdx` file add the following code:

```
import { Meta, Story } from '@storybook/addon-docs/blocks'; // Import some needed utilities
import BasExample from '../components/BasExample/BasExample'; // Import the component

<Meta title="BasExample" component={BasExample} /> // Initialization of your component,

## Basman example component

// Create a Story, this shows up in the sidebar navigation where the name 'Default' is displayed
<Preview>
    <Story name="Default">
    {{
        components: { BasExample },
        template: '<BasExample></BasExample>',
    }}
    </Story>
</Preview>
```

Now you can develop your component and preview it in Storybook

## Build and publish your component

To build your components before publishing them as a package on [Basman's NPM organization](https://www.npmjs.com/org/basman)
run the following command in your component's directory:

`$ lerna run build-package`

This creates a couple of files in the `./dist` directory of your components. These should match the `main`, `unpkg` and `browser` property values in your `package.json`.

Before publishing the packages to NPM Registry check with what user you are signed in with `$ npm whoami`. If you are logged in with the wrong account, run `$ npm adduser` and sign in with the correct credentials.

To publish the packages go to the root of this project and run:

`$ lerna publish`

## Listen to Custom Events with vanilla JS
You can listen to the Custom Events from your VueJS component with vanilla JS
by adding a `ref=""` attribute on your component's html tag:

```
<bas-example ref="bas-example"></bas-example>
```

Your component becomes available on the `$refs` property of the Vue instance.
With the `.$on()` method you can add a method to handle the event.

```
const vm = new Vue({
    el: '#app',
    components: { BasExample },
});

vm.$refs['bas-example'].$on('submit', data => console.log('submit', data))
```

## TODO
- [x] @storybook/addon-a11y
- [x] @storybook/addon-knobs
- [ ] @storybook/addon-storysource
- [x] @storybook/addon-viewport
- [x] Monorepo via https://github.com/lerna/lerna
