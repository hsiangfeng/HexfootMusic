<template lang="pug">
  .bg-dark.fixed-top
    nav.navbar.navbar-expand-lg.text-white.container.navbar-dark
      router-link(to="/").navbar-brand.text-white
        img(src="@/assets/logo.png", title="HexfootMusic", width="50px").img-fluid
      button.navbar-toggler.btn.btn-pirmaty(type='button', data-toggle='collapse', data-target='#navbarSupportedContent', aria-controls='navbarSupportedContent', aria-expanded='false', aria-label='Toggle navigation')
        span.navbar-toggler-icon
      #navbarSupportedContent.collapse.navbar-collapse
        ul.navbar-nav.mr-auto
          li.nav-item.active
            router-link.nav-link.text-white(to="/")
              | 首頁
              span.sr-only (current)
          li.nav-item
            router-link.nav-link.text-white(to='/game') 猜歌遊戲
        form.form-inline.my-2.my-lg-0(@submit.prevent="searchSong")
          input.form-control.mr-sm-2(type='search', aria-label='Search', placeholder="KKBOX OPENA API 搜尋歌曲、歌手、歌單", v-model="searchData")
</template>

<script>
export default {
  data() {
    return {
      searchData: '',
    };
  },
  methods: {
    searchSong() {
      if (this.searchData === '') {
        this.searchData = 'KKBOX';
      }

      this.$router.push({
        path: '/search',
        query: { q: this.searchData },
      });
    },
  },
};
</script>
