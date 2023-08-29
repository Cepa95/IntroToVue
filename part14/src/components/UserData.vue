<template>
  <div>
    <h2>
      {{ userName }}
      <h3>{{ age }}</h3>
    </h2>
  </div>
</template>



<script>
import { computed } from 'vue';

export default {
  props: ['firstName', 'lastName', 'age'],
  setup(props, context) {
    const uName = computed(function () {
      return props.firstName + ' ' + props.lastName;
    });
    // context.emit();

    return { userName: uName };
  },
};
</script>