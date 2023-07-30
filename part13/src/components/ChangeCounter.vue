<template>
    <button @click="addOne">add 1</button>
</template>

<script>
export default {
    methods: {
        addOne(){
          this.$store.commit('increment')
        }
    }
}
</script>
