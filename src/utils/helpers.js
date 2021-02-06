/**
 * Merge function to replace Object.assign with deep merging possibility
 *
 * @param item
 */
const isObject = item => typeof item === 'object' && !Array.isArray(item);
const mergeFunction = (target, source, deep = false) => {
    if (deep || !Object.assign) {
        const isDeep = property => isObject(source[property]) &&
            target !== null &&
            typeof target.property !== 'undefined' &&
            isObject(target[property]);
        const replaced = Object.getOwnPropertyNames(source)
            .map(property => ({
                [property]: isDeep(property) ? mergeFunction(
                    target[property],
                    source[property],
                    deep,
                ) : source[property],
            }))
            .reduce((a, b) => ({
                ...a,
                ...b,
            }), {});

        return {
            ...target,
            ...replaced,
        };
    }

    return Object.assign(target, source);

};

export const merge = mergeFunction;
