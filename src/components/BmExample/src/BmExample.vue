<template>
    <div class="bm-example">
        <h1>{{ message }}</h1>
    </div>
</template>

<script>
export default {
    name: 'BfExample',
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

.bf-example {
    color: $color-text;
    font-family: $font-primary;
    text-align: center;
}
</style>
