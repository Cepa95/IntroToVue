const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      fullName: "",
      lastName: "",
    };
  },
  watch: {
    // name(value) {
    //   if (value === "") {
    //     this.fullName = "";
    //   } else {
    //     this.fullName = value + " " + this.lastName;
    //   }
    // },
    // lastName(value) {
    //   if (value === "") {
    //     this.fullName = "";
    //   } else {
    //     this.fullName = this.name + " " + value;
    //   }
    // },
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(() => {
          that.counter = 0;
        }, 2000);
      }
    },
  },
  //nisu kao funkcije pri 'pozivu' bez ()
  computed: {
    full() {
      if (this.name === "" || this.lastName === "") {
        return "";
      }
      return this.name + " " + this.lastName;
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
