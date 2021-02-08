<template>
    <div
        :class="{
            'bas-modal': true,
            'bas-modal--visible': visible
        }"
    >
        <div class="bas-modal__modal">
            <div
                class="bas-modal__modal__close"
                :tabindex="visible ? 0 : -1"
                @click="close"
                @keyup="close"
            >
                <svg
                    class="{classes}"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                >
                    <path d="M7.2 5.8L5.8 7.2l8.8 8.8-8.8 8.8 1.4 1.4 8.8-8.8 8.8 8.8 1.4-1.4-8.8-8.8 8.8-8.8-1.4-1.4-8.8 8.8z" />
                </svg>
                <!-- <TimesSvg /> -->
            </div>

            <component
                :is="component"
                v-if="component"
            />
            <template v-else>
                <header>
                    <slot name="header" />
                </header>

                <section>
                    <slot name="body" />
                </section>

                <footer class="bas-modal-alert__modal__buttons">
                    <slot name="buttons" />
                </footer>
            </template>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BasModal',
    props: {
        component: {
            type: Object,
            default: null,
            required: false,
        },
        isProgrammatic: {
            type: Boolean,
            default: false,
        },
        closeEvent: {
            type: Function,
            default: () => ({}),
        },
        openEvent: {
            type: Function,
            default: () => ({}),
        },
    },
    emits: ['close', 'cancel', 'open'],
    data() {
        return {
            visible: false,
        };
    },
    beforeMount() {
        if (this.isProgrammatic) {
            document.body.append(this.$el);
        }
    },
    mounted() {
        this.visible = Boolean(this.isProgrammatic);
    },
    methods: {
        close() {
            this.visible = false;
            this.closeEvent();
            this.$emit('close');

            // Timeout for the animation complete before destroying
            if (this.programmatic) {
                this.isActive = false;
                setTimeout(() => {
                    this.$destroy();

                    if (typeof this.$el.remove !== 'undefined') {
                        this.$el.remove();
                    } else if (typeof this.$el.parentNode !== 'undefined' && this.$el.parentNode !== null) {
                        this.$el.remove();
                    }

                }, 150);
            }
        },
        open() {
            this.visible = true;
            this.openEvent();
        },
    },
};
</script>

<style lang="postcss" scoped>
.bas-modal {
    backdrop-filter: blur(3px);
    display: none;
    height: 100%;
    position: absolute;
    top: 0;
    visibility: hidden;
    width: 100%;
    z-index: 999;

    &--visible,
    &:target {
        animation-duration: 200ms;
        animation-name: slideFromTop;
        display: flex;
        visibility: visible;
    }

    &__modal {
        background-color: #fff;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2);
        box-sizing: border-box;
        margin: auto;
        padding: 1.5em;
        position: relative;
        width: 50vw;

        &__close {
            fill: #ddd;
            height: 25px;
            position: absolute;
            right: 1.5em;
            top: 1.5em;
            width: 25px;

            &:hover {
                animation: spin 200ms linear;
                cursor: pointer;
            }
        }

        &__buttons .button {
            margin-right: 1em;
        }
    }
}

@keyframes slideFromTop {
    from {
        opacity: 0;
        top: -100px;
    }

    to {
        opacity: 1;
        top: 0;
    }
}

@keyframes spin {
    100% {
        transform: rotate(180deg);
    }
}

</style>
