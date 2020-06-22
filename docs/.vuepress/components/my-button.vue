<template>
    <button @click="handlerClick">按钮</button>
</template>

<script>
export default {
    methods: {
        handlerClick () {
            console.log('success')
        }
    }
}
</script>