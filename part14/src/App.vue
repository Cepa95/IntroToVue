<template>
  <section class="container">
    <!-- <h2>{{ user.name }}</h2>
    <h3>{{ user.age }}</h3> -->
    <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>
    <button @click="setAge">Change Age</button>
    <div>
      <input type="text" placeholder="FirstName" v-model="firstName" />
      <input type="text" placeholder="LastName" v-model="lastName" />
    </div>
    <!-- <p>{{  user }}</p> -->
  </section>
</template>

<script>
import { ref, computed, watch } from 'vue';
// import { ref,reactive,isReactive, isRef, toRefs } from 'vue';
// import { ref, reactive, isReactive, isRef } from 'vue';
export default {
  // data() {
  //   return {
  //     userName: 'Maximilian',
  //   };
  // },
  setup() {
    // const uName = ref('Maximilian');
    // const uAge = ref(31);
    // const user = reactive({
    //   name: 'Maximilian',
    //   age: 31,
    // });
    // console.log(isRef(uAge.value));
    // console.log(isReactive(user), user.age);
    // setTimeout(() => {
    //   // uName.value ="Max"
    //   // uAge.value = 32
    //   (user.name = 'Max'), (user.age = 32);
    // }, 2000);

    // function setNewAge() {
    //   user.age = 33;
    // }

    // const userRefs = toRefs(user);
    // return {userName: user.value.name, age: user.value.age, user: user};
    // return {user: user, userName: userRefs.name, age: userRefs.age};
    // const uName = ref('Maximilian');
    const firstName = ref('');
    const lastName = ref('');
    const uAge = ref(31);
    function setNewAge() {
      uAge.value = 33;
    }

    const uName = computed(function () {
      return firstName.value + ' ' + lastName.value;
    });
    // watch(uAge, function(newValue, oldValue){
    //   console.log(oldValue, newValue)
    // });

    watch([uAge, uName], function (newValue, oldValue) {
      console.log(oldValue[0], newValue[0]);
      console.log(oldValue[1], newValue[1]);
    });

    // function setFirstName(event) {
    //   firstName.value = event.target.value;
    // }
    // function setLastName(event) {
    //   lastName.value = event.target.value;
    // }


    return {
      userName: uName,
      age: uAge,
      setAge: setNewAge,
      firstName,
      lastName,
    };
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