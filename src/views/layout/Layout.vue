<template lang="pug">
  #app
    Navbar
    Header.header
    router-view
    Footer
</template>

<script>
import Header from '@/views/layout/Header.vue';
import Footer from '@/views/layout/Footer.vue';
import Navbar from '@/views/layout/Navbar.vue';

export default {
  data() {
    return {
    };
  },
  components: {
    Navbar,
    Header,
    Footer,
  },
};
</script>
