<template>
    <div class="bas-modal">
        <h1>{{ message }}</h1>
    </div>
</template>

<script>
export default {
    name: 'BasModal',
    props: {
        message: {
            type: String,
            default: 'Don\'t put your wand there, boy!!',
        },
    },
};
</script>

<style lang="scss" scoped>
@import '../../../scss/main';

.bas-modal {
    color: $color-text;
    font-family: $font-primary;
    text-align: center;
}
</style>
