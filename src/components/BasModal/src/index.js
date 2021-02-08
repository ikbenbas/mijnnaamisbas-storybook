import BasModal from './BasModal';

let localVueInstance = null;

const BasModalProgrammatic = {
    open(parameters) {
        const parent = null;
        console.log(parameters);
        // const propertiesData = merge(defaultParameter, parameters);
        const Vue = typeof window !== 'undefined' && window.Vue ? window.Vue : localVueInstance;
        const BasModalComponent = Vue.extend(BasModal);
        const component = new BasModalComponent({
            parent,
            el: document.createElement('div'),
            propsData: {
                ...parameters,
                isProgrammatic: true,
            },
        });

        return component;
    },
};

const BasModalPlugin = {
    install(Vue) {
        localVueInstance = Vue;
        if (!Vue.prototype.$basman) {
            Vue.prototype.$basman = {};
        }
        const identifier = 'modal';
        Vue.prototype.$basman[identifier] = BasModalProgrammatic;
    },
};

export default BasModalPlugin;

export {
    BasModalProgrammatic,
    BasModal,
};
