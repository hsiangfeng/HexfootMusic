<template lang="pug">
  section
    h3 排行榜
    swiper(:options='swiperOption' v-if="rankingList")
      swiper-slide(v-for="item, index in rankingList.data" :key="index")
        a(href="#" @click.prevent="playMusic(item)").music-play.text-decoration-none
          img(:src="item.images[0].url").img-fluid
          .playbox
            .onplay.d-flex.justify-content-center.align-items-center
              font-awesome-icon(:icon="['far', 'play-circle']" size="3x")
          p.text-dark.font-weight-bold
            span.sub-title {{ item.title }}
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
      rankingList: '',
    };
  },
  methods: {
    getRanking() {
      this.$http.get(`${process.env.VUE_APP_KKBOXURL}/charts?territory=TW`, this.AJAXConfig)
        .then((res) => {
          this.rankingList = res.data;
        });
    },
    playMusic(item) {
      this.$emit('Charts', item);
    },
  },
  computed: {
    ...mapGetters(['AJAXConfig']),
  },
  created() {
    this.getRanking();
  },
};
</script>
