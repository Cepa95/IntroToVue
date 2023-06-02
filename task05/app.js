const app = Vue.createApp({
  data() {
    return {
        userInput: '',
        confirmInput: '',

    };
  },
  methods: {
    alertApp(){
        alert('alert')
    },
    userValue(event){
        this.userInput = event.target.value;
    },
     confirm() {
      this.confirmInput = this.userInput;
    },
  },
});

app.mount('#assignment')
