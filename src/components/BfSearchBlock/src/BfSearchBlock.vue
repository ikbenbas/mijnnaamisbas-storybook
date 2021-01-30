<template>
    <div class="bf-search-block">
        <a
            href="#"
            class="bf-search-block--link"
            data-target="slideSearch"
            @click.prevent="toggleSearchBlock"
        >
            <span class="bf-search-block--link--icon">
                <slot name="searchIcon">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                    ><path
                        d="M0 0h24v24H0z"
                        fill="none"
                    /><path d="M15.5 14h-.8l-.3-.3c1-1.1 1.6-2.6 1.6-4.2a6.5 6.5 0 10-2.3 5l.3.2v.8l5 5 1.5-1.5-5-5zm-6 0a4.5 4.5 0 110-9 4.5 4.5 0 010 9z" /></svg>
                </slot>
            </span>
            <slot name="label">
                <span class="bf-search-block--link--label">
                    {{ searchLabel }}
                </span>
            </slot>
        </a>

        <aside
            v-if="isVisible"
            class="bf-search-block--aside"
        >
            <span
                class="bf-search-block--aside--close-icon"
                @click="toggleSearchBlock"
            >
                <slot name="closeIcon">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                    ><path
                        d="M0 0h24v24H0z"
                        fill="none"
                    /><path d="M19 6.4L17.6 5 12 10.6 6.4 5 5 6.4l5.6 5.6L5 17.6 6.4 19l5.6-5.6 5.6 5.6 1.4-1.4-5.6-5.6z" /></svg>
                </slot>
            </span>

            <form class="bf-search-block--aside--form">
                <input
                    v-model="search"
                    :placeholder="placeholder"
                    type="text"
                    @keydown.enter.prevent="submit"
                >
                <a
                    href="#"
                    class="bf-search-block--aside--form--icon"
                    @click.prevent="submit"
                >
                    <slot name="searchIconForm">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                        ><path
                            d="M0 0h24v24H0z"
                            fill="none"
                        /><path d="M15.5 14h-.8l-.3-.3c1-1.1 1.6-2.6 1.6-4.2a6.5 6.5 0 10-2.3 5l.3.2v.8l5 5 1.5-1.5-5-5zm-6 0a4.5 4.5 0 110-9 4.5 4.5 0 010 9z" /></svg>
                    </slot>
                </a>
            </form>
        </aside>
    </div>
</template>

<script>
export default {
    name: 'BfSearchBlock',
    props: {
        placeholder: {
            type: String,
            default: 'Search...',
        },
        searchLabel: {
            type: String,
            default: 'Search',
        },
        searchValue: {
            type: String,
            default: null,
        },
    },
    data() {
        return {
            isVisible: false,
            search: null,
        };
    },
    mounted() {
        this.search = this.searchValue;
    },
    methods: {
        submit() {
            this.$emit('submit', this.search);
        },
        toggleSearchBlock () {
            this.isVisible = !this.isVisible;
        },
    },
};
</script>

<style lang="scss" scoped>
@import '../../../scss/main';

.bf-search-block {
    font-family: $font-primary;

    &--link {
        align-items: center;
        color: $color-text-soft;
        display: flex;
        text-decoration: none;
        transition: color 200ms;

        &:hover,
        &:focus {
            color: $color-text;
        }

        &--icon {
            svg {
                height: 24px;
                width: 24px;
            }
        }

        &--label {
            display: inline-block;
            margin-left: 0.25em;
        }
    }

    &--aside {
        background-color: #eae9e9;
        box-sizing: border-box;
        justify-content: center;
        padding: 1.25em;
        position: absolute;
        top: 0;
        width: 100%;
        z-index: 100;

        &--close-icon {
            cursor: pointer;
            position: absolute;
            right: 20px;
            top: 20px;

            svg {
                height: 24px;
                width: 24px;
            }
        }

        &--form {
            align-items: center;
            display: flex;
            margin: 0 auto;
            width: auto;
            justify-content: center;

            &--icon {
                margin-left: 0.75em;

                svg {
                    height: 24px;
                    width: 24px;
                }
            }

            input {
                background-color: #fff;
                border-radius: 0;
                border: 1px solid $color-text-soft;
                color: $color-text-soft;
                font-size: 1rem;
                height: 55px;
                line-height: 1.25rem;
                padding: 0 1.25em;
                width: 60%;
            }
        }
    }
}
</style>
