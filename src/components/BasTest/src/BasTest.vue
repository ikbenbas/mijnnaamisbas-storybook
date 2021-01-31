<template>
    <div class="bas-test">
        <h1>{{ message }}</h1>
    </div>
</template>

<script>
export default {
    name: 'BasTest',
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

.bas-test {
    color: $color-text;
    font-family: $font-primary;
    text-align: center;
}
</style>
