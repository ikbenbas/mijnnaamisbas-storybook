# Bitfactory search block

## Installation and usage

Install the component:

```
$ npm i @bitfactory/bf-search-block
```

Initialize the component:

```JavaScript
import BfSearchBlock from '@bitfactory/bf-search-block';

...
new Vue({
    el: '#app',
    components: { BfSearchBlock },
});
```

Use the component:

```vue
<bf-search-block
    placeholder="Search..."
    search-label="Search"
    search-value="Harry Potter"
    @submit="onSubmit"
></bf-search-block>
```
