<template>
  <div>
    <h2>
      {{ userName }}
      <h3>{{ age }}</h3>
    </h2>
  </div>
</template>



<script>
import { computed, inject } from 'vue';

export default {
  props: ['firstName', 'lastName'],
  setup(props, context) {
    const uName = computed(function () {
      return props.firstName + ' ' + props.lastName;
    });
    // context.emit();
    console.log(context)
    const age = inject('userAge')

    return { userName: uName, age: age};
  },
};
</script>