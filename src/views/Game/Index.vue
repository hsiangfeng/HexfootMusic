<template lang="pug">
  main
    Navbar
    router-view
    Footer
</template>

<script>
import Navbar from '../layout/Navbar.vue';
import Footer from '../layout/Footer.vue';

export default {
  data() {
    return {
    };
  },
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style lang="scss">

</style>
