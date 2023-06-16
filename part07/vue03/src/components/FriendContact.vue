<template>
  <li>
    <h2>
      {{ name }}
    </h2>
   <button @click="toogleDetails"> {{detailsAreVisible ? 'Hide' : 'Show'}}  Details</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone: </strong>{{ phoneNumber }}</li>
      <li><strong>Email:</strong> {{ emailAddress }}</li>
    </ul>
  </li>
</template>


<script>
export default {
  props: [
    'name',
    'phoneNumber',
    'emailAddress',
  ],
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "manuel",
        name: "manuel lorenz",
        phone: "01234 5678 991",
        email: "manuel@localhost.com",
      },
    };
  },
  methods: {
    toogleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
};
</script>