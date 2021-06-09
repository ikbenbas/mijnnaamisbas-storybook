import BasModal from './BasModal';

let localVueInstance = null;

const setSlots = (slots, component) => {
    if (slots) {
        const { header, body, footer } = slots;

        component.$slots.header = Array.isArray(header) ? component.$createElement(...header) : header ?? null;
        component.$slots.body = Array.isArray(body) ? component.$createElement(...body) : body ?? null;
        component.$slots.footer = Array.isArray(footer) ? component.$createElement(...footer) : footer ?? null;

        component.$forceUpdate();
    }
};

const BasModalProgrammatic = {
    open(parameters) {
        const { parent, slots } = parameters;

        if (parameters.component && !parent) {
            throw new Error('No parent component provided for modal!');
        }

        delete parameters.parent;
        delete parameters.slots;

        const BasModalComponent = localVueInstance.extend(BasModal);
        const component = new BasModalComponent({
            parent,
            el: document.createElement('div'),
            propsData: {
                ...parameters,
                isProgrammatic: true,
            },
        });

        setSlots(slots, component);

        return component;
    },
};

const plugin = {
    install(Vue) {
        localVueInstance = Vue;
        if (!Vue.prototype.$basman) {
            Vue.prototype.$basman = {};
        }
        const identifier = 'modal';
        Vue.prototype.$basman[identifier] = BasModalProgrammatic;
    },
};

export default plugin;

export {
    BasModalProgrammatic,
    BasModal,
};
