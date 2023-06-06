const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },

    // setName(event){
    //   this.name = event.target.value;
    // },
    setName(event, last) {
      this.name = event.target.value + " " + last;
    },

    submitForm(event) {
      // event.preventDefault();  .prevent u html-u
      alert("submited");
    },

    confirmInput() {
      this.confirmedName = this.name;
    },
    
  },
});

app.mount("#events");
