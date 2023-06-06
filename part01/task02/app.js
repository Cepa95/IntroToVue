const app = Vue.createApp({
  data() {
    return {
      courseGoalA: "learning Vue",
    //   courseGoalB: "<h2>Mastering Vue<h2>",
      courseGoalB: "Mastering Vue",
      vueLink: 'https://vuejs.org/'
    };
  },
  methods:{
    outputGoal(){
        const randomNumber = Math.random();
        if (randomNumber < 0.5){
            return this.courseGoalA;
        }
        else{
            return this.courseGoalB;
        }
    }
  }
});


app.mount("#user-goal");
