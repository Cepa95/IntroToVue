<template>
<section>
<h2> My friends</h2>
<ul>
    <li></li>
</ul>
</section>
</template>


<script>
export default {
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "manuel lorenz",
          phone: "01234 5678 991",
          email: "manuel@localhost.com",
        },
        {
          id: "julie",
          name: "julie lorenz",
          phone: "1111 1118 991",
          email: "julie@localhost.com",
        },
      ],
    };
  },
};
</script>