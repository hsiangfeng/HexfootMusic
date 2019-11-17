<template lang="pug">
  section
    h3 歌曲風格
    swiper(:options='swiperOption' v-if="styleList")
      swiper-slide(v-for="item, index in styleList" :key="index").swiper-style
        router-link(:to="`/categories/${item.id}`").text-decoration
          .style-box
            p.font-weight-bold.m-0 ♫ {{ item.title }} 風格
      .swiper-button-prev(slot='button-prev')
      .swiper-button-next(slot='button-next')
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 5,
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
      styleList: '',
    };
  },
  methods: {
    getStylelist() {
      this.$http.get(`${process.env.VUE_APP_KKBOXURL}/new-release-categories?territory=TW`, this.AJAXConfig)
        .then((res) => {
          this.styleList = res.data.data;
        });
    },
  },
  computed: {
    ...mapGetters(['AJAXConfig']),
  },
  created() {
    this.getStylelist();
  },
};
</script>

<style lang="scss">
  .style-box {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    background-color: rgba(0, 37, 26, 0.5);
    font-size: 24px;
  }
  .swiper-style {
    border-radius: 10px;
    &:nth-child(odd) {
      background-image: url(../../assets/images/austin-neill-kd5OtJ-ubIE-unsplash.jpg);
      background-size: cover;
      background-position: center;
    }
    &:nth-child(even) {
      background-image: url(../../assets/images/felipe-portella-h6gTtqBZUxc-unsplash.jpg);
      background-size: cover;
      background-position: center;
    }
  }
</style>
