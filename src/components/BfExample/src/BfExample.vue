<template>
    <div class="bf-example">
        <h1>{{ message }}</h1>
    </div>
</template>

<script>
export default {
    name: 'BfExample',
    props: {
        message: {
            type: String,
            default: 'Hello Bits!',
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
