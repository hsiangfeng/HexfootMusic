<template lang="pug">
  .bg-dark
    Navbar
    Loading(:isLoading="isLoading")
    section.section
      .container-fluid
        .row
          .col-md-8.col-12.d-flex.justify-content-center.flex-column
            .iframe
              iframe(:src="`https://www.youtube.com/embed/${musicID}?autoplay=1`", frameBorder="0", allow="autoplay")
            .playContent
              h5.text-primary {{ YTData.title }}
              p.small.text-primary {{ YTData.channelTitle }}
              p.small.text-primary {{ YTData.description }}
          .col-md-4.col-12
            h5.text-primary {{ readyMusic.title }} 清單
            .music-box.music-overflow
              a(href="#", v-for="item in musicList.data", @click.prevent="playMusic(item)").music-list
                .music-img
                  img(:src="item.album.artist.images[0].url")
                .music-title
                  div {{ item.name }}
                  div {{ item.album.artist.name }}
    Footer
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Loading from '@/components/shared/Loading.vue';
import Footer from '@/views/layout/Footer.vue';
import Navbar from '@/views/layout/Navbar.vue';

export default {
  data() {
    return {
      hotDate: '',
      musicList: '',
      YTData: [],
      musicID: '4n5yIXzY3TYupQyjvw',
    };
  },
  metaInfo() {
    return {
      title: this.metaTitle || 'HexfootMusic',
    };
  },
  components: {
    Loading,
    Navbar,
    Footer,
  },
  methods: {
    getMusiclist() {
      this.$store.commit('LOADING', true);

      let url = `${process.env.VUE_APP_KKBOXURL}/new-hits-playlists/${this.readyMusic.id}/tracks?territory=TW&limit=20`;
      if (!this.readyMusic.type === 'hex') {
        url = `${process.env.VUE_APP_KKBOXURL}/shared-playlists/${this.readyMusic.id}/tracks?territory=TW&limit=20`;
      }

      this.$http.get(url, this.AJAXConfig).then((res) => {
        this.musicList = res.data;
        this.$store.commit('LOADING', false);
      });
    },
    playMusic(item) {
      this.$store.commit('LOADING', true);
      const playTitle = item.name;
      const url = `https://www.googleapis.com/youtube/v3/search?key=${process.env.VUE_APP_GAPIKEY}&part=snippet&type=video&q=${playTitle}`;
      this.$http.get(url).then((res) => {
        const cacheYT = res.data.items[0].snippet;
        this.YTData = cacheYT;
        this.musicID = res.data.items[0].id.videoId;
        this.$store.commit('LOADING', false);
      });
    },
    getTitle() {
      this.$store.dispatch('getMetaTitle', this.$route.meta.title);
    },
    ...mapActions(['getToken']),
  },
  computed: {
    ...mapGetters(['isLoading', 'AJAXConfig', 'readyMusic', 'metaTitle']),
  },
  created() {
    if (!this.readyMusic.id) {
      this.$router.push('/');
      return;
    }
    this.getMusiclist();
    this.getTitle();
  },
};
</script>

<style lang="scss" scoped>
.section {
  padding-top: 80px;
}
.iframe {
  height: 100%;
  iframe {
    width: 100%;
    height: 100%;
  }
}
.playContent {
  margin-top: 20px;
}
.music-box {
  height: calc(100vh - 7rem);
}
.music-overflow {
  overflow-y: scroll;
}
.music-list {
  display: flex;
  margin: 15px 0px;
  transition: all 0.5s;
  .music-img {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 50px;
    }
  }
  .music-title {
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-decoration: none;
  }
  &:hover {
    background-color: #69F0AE;
    color: #00251a;
    text-decoration: none;
  }
}
</style>
