# Vue example component

## Installation and usage

```
$ npm i @basman/bas-modal
```

```html
<BasModal ref="modal" :close-event="closeAlert" :open-event="openAlert">
    <template #header><h1>header</h1></template>
    <template #body><p>body</p></template>
    <template #buttons><button>buttons</button></template>
</BasModal>
```

```javascript
...
methods: {
    openModal() {
        this.$refs.modal.open();
    }
}
...
```

## Programmatically

You can also choose to open the component programmatically. With this option you do not need to add the component tag to your template. You can call the modal's `open` method on the `this.$basman` property of your Vue instance.

```javascript
import Vue from 'vue';
import BasModalPlugin from '@basman/bas-modal';

export default {
    created() {
        Vue.use(BasModalPlugin);
    },
    methods: {
        openModal() {
            this.$basman.modal.open({
                'component': BasExample
            });
        }
    }
};
```
