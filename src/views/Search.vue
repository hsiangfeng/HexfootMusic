<template lang="pug" >
  section.container
    Loading(:isLoading="isLoading")
    h3
      | KKBOX OPEN API 搜尋到的相關歌手有
      |
      span.sub-title {{ searchResult.artists.data.length }}
      |
      | 位
    swiper(:options='swiperOption', v-if="searchResult.artists.data.length > 0")
      swiper-slide(v-for="item, index in searchResult.artists.data", :key="index")
        router-link(:to="`/Artists/${item.id}`").music-play.text-decoration-none
          img(:src="item.images[1].url").img-fluid
          p.text-dark.font-weight-bold
            span.sub-title {{ item.name }}
      .swiper-button-prev(slot='button-prev')
      .swiper-button-next(slot='button-next')
    h3
      | KKBOX OPEN API 相關歌曲有
      |
      span.sub-title {{ searchResult.tracks.data.length }}
      |
      | 曲
    .row
      .col-md-2.col-4(v-for="item, index in searchResult.tracks.data", :key="index")
        a.text-decoration-none.text-dark(href="#", @click.prevent="playMusic(item.album)")
          img.img-fluid(:src="item.album.images[1].url")
          p
            span.sub-title {{ item.album.name }}
      .col-md-2.col-4.bg-dark.d-flex.justify-content-center.align-items-center
        .text-center.text-white
          p 想看其他 API 串接?
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
      searchData: '',
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
        autoplay: false,
      },
    };
  },
  components: {
    Loading,
    PlayMusicModel,
  },
  beforeRouteUpdate(to, from, next) {
    this.searchData = to.query.q;
    this.getSearch();
    next();
  },
  methods: {
    getSearch() {
      this.$store.commit('LOADING', true);
      this.$http.get(`${process.env.VUE_APP_KKBOXURL}/search?q=${this.searchData}&type=artist,track&territory=TW`, this.AJAXConfig)
        .then((res) => {
          this.searchResult = res.data;
          this.$store.commit('LOADING', false);
        });
    },
    playMusic(item) {
      this.musicObject = item;
      this.musicObject.type = 'album';
      this.musicObject.autoplay = true;
      $('#musicModal').modal('show');
      $('#musicModal').on('hidden.bs.modal', () => {
        this.musicObject = {
          id: '0otAoi0Eu_GpAJGfcF',
          type: 'album',
          autoplay: false,
        };
      });
    },
    ...mapActions(['getToken']),
  },
  computed: {
    ...mapGetters(['isLoading', 'AJAXConfig']),
  },
  async created() {
    await this.getToken();
    this.searchData = this.$route.query.q;
    this.getSearch();
  },
};
</script>

<style lang="scss">
</style>
