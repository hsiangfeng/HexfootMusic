<template lang="pug">
  section
    h3 搶先聽六腳講師歌單
    .row
      .col-md-6.col-6.d-flex.justify-content-center.align-items-center.flex-column
        .hex-teacher-gonsakon
        h5.mt-3.text-center 六腳學院校長
        vue-typed-js(:strings="['這條路上你絕對不孤單。']",).justify-content-center
            p
              span.sub-title.typing
        a(href="#" @click.prevent="playView('SkDpEIhAiJWQ0coWuk')").btn.btn-outline-dark
          | 偷聽
          |
          span.sub-title 校長
          |
          | 都聽什麼
      .col-md-6.col-6.d-flex.justify-content-center.align-items-center.flex-column
        .hex-teacher-casper
        h5.mt-3.text-center 六腳學院副校長
        vue-typed-js(:strings="['我要曬女兒!']").justify-content-center
          p
            span.sub-title.typing
        a(href="#" @click.prevent="playView('GlAnAnrgJoxtphz9_t')").btn.btn-outline-dark
          | 偷聽
          |
          span.sub-title 副校長
          |
          | 都聽什麼
    p.small.text-center
      del 以上都是虛構的，腦濕請別森氣。
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    playView(item) {
      const data = {
        id: item,
        type: 'hex',
      };
      this.$store.commit('READYMUSIC', data);
      this.$router.push('/playview');
    },
  },
};
</script>

<style lang="scss">
  .hex-teacher-gonsakon {
    background-image: url(../../assets/images/14240690_36cf_3.jpg);
    background-position: center;
    background-size: cover;
    width: 200px;
    height: 200px;
    position: relative;
    border-radius: 100%;
  }
  .hex-teacher-casper {
    background-image: url(../../assets/images/46772866_654326474963579_6292658277310267392_o.png);
    background-position: center;
    background-size: cover;
    width: 200px;
    height: 200px;
    position: relative;
    border-radius: 100%;
  }
</style>
