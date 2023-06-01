const app = Vue.createApp({
  data() {
    return {
      courseGoal: "learning Vue",
      vueLink: 'https://vuejs.org/'
    };
  },
});

app.mount("#user-goal");
