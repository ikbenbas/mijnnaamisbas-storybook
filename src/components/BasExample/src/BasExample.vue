<template>
    <div class="bas-example">
        <h1>{{ message }}</h1>
    </div>
</template>

<script>
export default {
    name: 'BasExample',
    props: {
        message: {
            type: String,
            default: 'Don\'t put your wand there, boy!!',
        },
    },
};
</script>

<style scoped>
.bas-example {
    color: #ddd;
    text-align: center;
}
</style>
