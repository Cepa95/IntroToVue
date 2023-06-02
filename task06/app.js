const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  //nisu kao funkcije pri 'pozivu' bez ()
  computed: {
    full() {
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "last";
    },
  },

  methods: {
    fullName() {
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "last";
    },

    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    reset() {
      this.name = "";
    },
  },
});

app.mount("#events");
