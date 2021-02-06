<template>
    <span
        :class="{ active: isActive }"
        :style="style"
        @mouseenter="activate()"
        @mouseleave="deactivate()"
    ><slot /></span>
</template>

<script>
export default {
    name: 'BasHuePartyText',
    props: {
        active: {
            type: Boolean,
            default: true,
        },
        onHover: {
            type: Boolean,
            default: false,
        },
        animationDuration: {
            type: String,
            default: '10s',
        },
        startColor: {
            type: String,
            default: '#55acee',
        },
        endColor: {
            type: String,
            default: '#238c76',
        },
    },
    data() {
        return {
            isActive: true,
        };
    },
    computed: {
        style() {
            return this.isActive ? {
                'animation-duration': `${this.animationDuration}`,
                'background-image': `linear-gradient(300deg, ${this.startColor}, ${this.endColor})`,
                'color': this.startColor,
            } : {};
        },
    },
    created() {
        this.isActive = this.active;
    },
    methods: {
        activate() {
            if (this.onHover) {
                this.isActive = true;
            }
        },
        deactivate() {
            if (this.onHover) {
                this.isActive = false;
            }
        },
    },
};
</script>

<style scoped>
.active {
    animation: hue infinite linear;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

@keyframes hue {
    from {
        filter: hue-rotate(0deg);
    }

    to {
        filter: hue-rotate(-360deg);
    }
}
</style>
