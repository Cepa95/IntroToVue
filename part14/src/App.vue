<template>
  <section class="container">
    <h2>{{ user.name }}</h2>
    <h3>{{ user.age }}</h3>
    <button @click="setAge">Change Age</button>
    <div>
      <input type="text" placeholder="FirstName" />
      <input type="text" placeholder="LastName" />
    </div>
    <!-- <p>{{  user }}</p> -->
  </section>
</template>

<script>
// import { ref } from 'vue';
// import { ref,reactive,isReactive, isRef, toRefs } from 'vue';
import { ref, reactive, isReactive, isRef } from 'vue';
export default {
  // data() {
  //   return {
  //     userName: 'Maximilian',
  //   };
  // },
  setup() {
    // const uName = ref('Maximilian');
    const uAge = ref(31);
    const user = reactive({
      name: 'Maximilian',
      age: 31,
    });
    console.log(isRef(uAge.value));
    console.log(isReactive(user), user.age);
    setTimeout(() => {
      // uName.value ="Max"
      // uAge.value = 32
      (user.name = 'Max'), (user.age = 32);
    }, 2000);

    function setNewAge() {
      user.age = 33;
    }

    // const userRefs = toRefs(user);
    // return {userName: user.value.name, age: user.value.age, user: user};
    // return {user: user, userName: userRefs.name, age: userRefs.age};
    return { user: user, setAge: setNewAge };
  },
};
</script>
<!-- 
<script setup>
import { ref } from 'vue';
 
const uName = ref('Maximilian');
 
setTimeout(function() {
  uName.value = 'Max';
}, 2000);
</script> -->

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>