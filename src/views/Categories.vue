<template lang="pug">
  main
    Loading(:isLoading="isLoading")
    section.container
      h2
        | 最新發行
        |
        span.sub-title {{ categoriesData.title }}
        |
        | 專輯歌曲
      .row
        .col-md-2.col-4(v-for="item, index in categoriesData.albums.data" :key="index")
          a.text-decoration-none.text-dark(href="#" @click.prevent="playMusic(item)")
            img.img-fluid(:src="item.images[1].url")
            p
              span.sub-title {{ item.name }}
        .col-md-2.col-4.bg-dark.d-flex.justify-content-center.align-items-center
          .text-center.text-white
            p 想繼續試聽其他歌?
            router-link(to="/").btn.btn-outline-primary 返回首頁
    PlayMusicModel(:musicSrc="musicObject")

</template>

<script>
/* global $ */
import { mapGetters, mapActions } from 'vuex';
import Loading from '@/components/shared/Loading.vue';
import PlayMusicModel from '@/components/PlayMusicModel.vue';

export default {
  data() {
    return {
      categoriesid: '',
      categoriesData: {
        albums: {},
      },
      musicObject: {
        id: '0otAoi0Eu_GpAJGfcF',
        type: 'album',
        terr: 'TW',
        lang: 'TC',
        autoplay: false,
      },
    };
  },
  components: {
    Loading,
    PlayMusicModel,
  },
  methods: {
    getCategories() {
      this.$store.commit('isLoading', true);
      this.$http.get(`${process.env.VUE_APP_KKBOXURL}/new-release-categories/${this.categoriesid}?territory=TW`, this.AJAXConfig)
        .then((res) => {
          this.categoriesData = res.data;
          this.$store.commit('isLoading', false);
        });
    },
    playMusic(item) {
      this.musicObject = item;
      this.musicObject.type = 'album';
      this.musicObject.terr = 'TW';
      this.musicObject.lang = 'TC';
      this.musicObject.autoplay = true;
      $('#musicModal').modal('show');
    },
    ...mapActions(['getToken']),
  },
  computed: {
    ...mapGetters(['isLoading', 'AJAXConfig']),
  },
  async created() {
    await this.getToken();

    this.categoriesid = this.$route.params.categoriesid;
    this.getCategories();
  },
  mounted() {
    $('#musicModal').on('hidden.bs.modal', () => {
      this.musicObject = {
        id: '0otAoi0Eu_GpAJGfcF',
        type: 'album',
        terr: 'TW',
        lang: 'TC',
        autoplay: false,
      };
    });
  },
};
</script>

<style lang="scss">
</style>
