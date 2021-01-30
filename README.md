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
 - Each component has it's own folder in the `/src/components/` directory with a `src` folder, and package.json
 - Folder names are CamelCase and **must** start with the `Bf` prefix e.g. `BfExample`
 - Create the main component in the `src` directory within newly created folder. This file should have the same name as the folder e.g. `BfExample.vue`. 
 The path to your file should look similar to `/src/components/BfExample/src/BfExample.vue`.
 - Within this folder you can create one or more VueJS child components, using the same naming convention e.g. `BfExampleChild.vue`
 
The `package.json` needs at least the properties as defined below. Change the `BfExample` to the naming of your own component.

```
{
  "name": "@bitfactory/bf-example",
  "version": "0.0.0",
  "author": "Bitfactory",
  "keywords": [
    "Vue",
    "VueJS",
  ],
  "description": "VueJS component for a happy coding",
  "license": "MIT",
  "publishConfig": {
    "access": "public"
  },
  "main": "./dist/BfExample.umd.js",
  "unpkg": "./dist/BfExample.min.js",
  "browser": {
    "./sfc": "./src/BfExample.vue"
  },
  "scripts": {
    "build-package": "vue-cli-service build --target lib --name BfExample ./src/BfExample.vue",
  }
}
```

The `name` property value **must** start with the `@bitfactory/` scope and the author name should be `Bitfactory`.

## Writing stories
 - For each main VueJS component you have to create a `.stories.mdx` file in the `/src/stories/` directory
 - The filename should be a lowercase hyphenated string of the CamelCase component name e.g. `bf-example.stories.mdx`

## Start developing
In your `stories.mdx` file add the following code:

```
import { Meta, Story } from '@storybook/addon-docs/blocks'; // Import some needed utilities
import BfExample from '../components/BfExample/BfExample'; // Import the component

<Meta title="BfExample" component={BfExample} /> // Initialization of your component,

## Bitfactory example component

// Create a Story, this shows up in the sidebar navigation where the name 'Default' is displayed
<Preview>
    <Story name="Default">
    {{
        components: { BfSearchBlock },
        template: '<BfExample></BfExample>',
    }}
    </Story>
</Preview>
```

Now you can develop your component and preview it in Storybook

## Build and publish your component

To build your component before publishing it as a package on [Bitfactory's NPM organization](https://www.npmjs.com/org/bitfactory)
run the following command in your component's directory:

`$ npm run build-package`

This creates a couple of files in the `./dist` directory of your component. These should match the `main`, `unpkg` and `browser` property values in your `package.json`.

## Listen to Custom Events with vanilla JS
You can listen to the Custom Events from your VueJS component with vanilla JS
by adding a `ref=""` attribute on your component's html tag:

```
<bf-example ref="bf-search-block"></bf-example>
```

Your component becomes available on the `$refs` property of the Vue instance. 
With the `.$on()` method you can add a method to handle the event.

```
const vm = new Vue({
    el: '#app',
    components: { BfSearchBlock },
});

vm.$refs['bf-search-block'].$on('submit', data => console.log('submit', data))  
```

## TODO
 - @storybook/addon-a11y
 - @storybook/addon-knobs
 - @storybook/addon-storysource
 - @storybook/addon-viewport
 - Monorepo via https://github.com/lerna/lerna
