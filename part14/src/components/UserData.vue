<template>
  <div>
    <h2>
      {{ userName }}
      <h3>{{ age }}</h3>
    </h2>
  </div>
</template>



<script>
import {
  computed,
  inject,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted
} from 'vue';

export default {
  props: ['firstName', 'lastName'],
  setup(props, context) {
    const uName = computed(function () {
      return props.firstName + ' ' + props.lastName;
    });
    // context.emit();
    console.log(context);
    const age = inject('userAge');
    
    onBeforeMount(function(){
        console.log('onBeforeMount')
    })
    onMounted(function(){
        console.log('onMounted')
    })
    onBeforeUpdate(function(){
        console.log('onBeforeUpdate')
    })
    onUpdated(function(){
        console.log('onUpdated')
    })
    onBeforeUnmount(function(){
        console.log('onBeforeUnmount')
    })
    onUnmounted(function(){
        console.log('onUnmounted')
    })
   

    return { userName: uName, age: age };
  },
};
</script>