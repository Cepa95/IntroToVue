<template>
    <button @click="increment">add 3</button>
    <button @click="increase({value: 11})">add 11</button>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    methods: {
        // addOne(){
        //   this.$store.dispatch('increment')
        // }
        ...mapActions('numbers',
            ['increment', 'increase'])
    }
}
</script>
