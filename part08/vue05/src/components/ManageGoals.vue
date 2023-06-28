<template>
  <div>
    <h2>Manage goals</h2>
    <input type="text" ref="goal" />
    <button @click="setGoal">set goal</button>
    <teleport to="body">
    <error-alert v-if="inputIsValid">
      <h2>Input is invalid</h2>
      <p>Please enter something</p>
      <button @click="confirmError">Okay</button>
    </error-alert>
    </teleport>
  </div>
</template>

<script>
import ErrorAlert from "./ErrorAlert.vue";
export default {
  components: {
    ErrorAlert,
  },
  data() {
    return {
      inputIsValid: false,
    };
  },
  methods: {
    setGoal() {
      const enteredValue = this.$refs.goal.value;
      if (enteredValue === "") {
        // alert('Input must not be empty')
        this.inputIsValid = true;
      }
    },
    confirmError() {
      this.inputIsValid = false;
    }
  },
};
</script>