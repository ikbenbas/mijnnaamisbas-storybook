import BasModal from './BasModal';

let localVueInstance = null;

const BasModalProgrammatic = {
    open(parameters) {
        const parent = null;

        // const defaultParameter = {
        //     position: config.defaultBasModalPosition || 'is-top',
        // };

        // if (parameters.parent) {
        //     parent = { ...parameters.parent };
        //     delete parameters.parent;
        // }

        // let slot = null;
        // if (Array.isArray(parameters.message)) {
        //     slot = parameters.message;
        //     delete parameters.message;
        // }

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
        console.dir(component);

        // if (slot) {
        //     component.$slots.default = slot;
        //     component.$forceUpdate();
        // }

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
