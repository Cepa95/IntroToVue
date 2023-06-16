<template>
  <li>
    <h2>
      {{ name }} {{friendIsFavorite === '1' ? '(Favorite)' : ''}}
    </h2>
    <button @click="toggleFavorite"> Toggle Favorite</button>
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
    'isFavorite',
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
      friendIsFavorite: this.isFavorite,
    };
  },
  methods: {
    toogleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite(){
      this.friendIsFavorite  = (this.friendIsFavorite === '1') ?  '0' : '1'
    }
  },
};
</script>