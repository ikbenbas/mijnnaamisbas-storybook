import BasModal from './BasModal';

let localVueInstance = null;

const BasModalProgrammatic = {
    open() {
        const parent = null;

        // const propertiesData = merge(defaultParameter, parameters);
        const Vue = typeof window !== 'undefined' && window.Vue ? window.Vue : localVueInstance;
        const BasModalComponent = Vue.extend(BasModal);
        const component = new BasModalComponent({
            parent,
            el: document.createElement('div'),
            propsData: {
                isProgrammatic: true,
            },
        });

        return component;
    },
};

const Plugin = {
    install(Vue) {
        localVueInstance = Vue;
        if (!Vue.prototype.$basman) {
            Vue.prototype.$basman = {};
        }
        const identifier = 'modal';
        Vue.prototype.$basman[identifier] = BasModalProgrammatic;

        Vue.component('BasModal', BasModal);
    },
};

// if (typeof window !== 'undefined' && window.Vue) {
//     window.Vue.use(Plugin);
// }

export default Plugin;

export {
    BasModalProgrammatic,
    BasModal,
};
