<template>
    <button @click="addOne">add 1</button>
</template>

<script>
export default {
    methods: {
        addOne(){
          this.$store.dispatch('increment')
        }
    }
}
</script>
