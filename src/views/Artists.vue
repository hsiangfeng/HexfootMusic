<template lang="pug" >
  main
    Loading(:isLoading="isLoading")
    section.container
      .row
        .col-md-2.col-4(v-for="item, index in searchResult.data" :key="index")
          a.text-decoration-none.text-dark(href="#" @click.prevent="playMusic(item)")
            img.img-fluid(:src="item.images[1].url")
            p
              span.sub-title {{ item.name }}
        .col-md-2.col-4.bg-dark.d-flex.justify-content-center.align-items-center
          .text-center.text-white
            p 想找其他歌手的歌曲?
            router-link(to="/search").btn.btn-outline-primary 返回搜尋
    PlayMusicModel(:musicSrc="musicObject")
</template>

<script>
/* global $ */
import { mapActions, mapGetters } from 'vuex';
import Loading from '@/components/shared/Loading.vue';
import PlayMusicModel from '@/components/PlayMusicModel.vue';

export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints:
        {
          992: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
          },
          576: {
            slidesPerView: 2,
          },
        },
      },
      artistsid: '',
      searchResult: {
        artists: {
          data: [],
        },
        tracks: {
          data: [],
        },
      },
      musicObject: {
        id: '0otAoi0Eu_GpAJGfcF',
        type: 'album',
        terr: 'TW',
        lang: 'TC',
      },
    };
  },
  components: {
    Loading,
    PlayMusicModel,
  },
  methods: {
    getSearch() {
      this.$store.commit('isLoading', true);
      this.$http.get(`${process.env.VUE_APP_KKBOXURL}/artists/${this.artistsid}/albums?territory=TW`, this.AJAXConfig)
        .then((res) => {
          this.searchResult = res.data;
          this.$store.commit('isLoading', false);
        });
    },
    playMusic(item) {
      this.musicObject = item;
      this.musicObject.type = 'album';
      this.musicObject.terr = 'TW';
      this.musicObject.lang = 'TC';
      $('#musicModal').modal('show');
    },
    ...mapActions(['getToken']),
  },
  computed: {
    ...mapGetters(['AJAXConfig']),
  },
  async created() {
    await this.getToken();

    this.artistsid = this.$route.params.artistsid;
    this.getSearch();
  },
  beforeRouteUpdate(to, from, next) {
    this.searchData = to.query.q;
    this.getSearch();
    next();
  },
};
</script>

<style lang="scss">
</style>
