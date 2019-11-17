<template lang="pug">
  main.bg-dark
    Loading(:isLoading="isLoading")
    ul.nav.justify-content-center.align-items-center
      li.nav-item
        router-link.nav-link(to="/") 首頁
      li.nav-item
        router-link.nav-link(to="/game") 小遊戲
      li.nav-item
        router-link.nav-link(to="/search") 查詢
    .container-fluid
      .row
        .col-md-8.col-12.d-flex.justify-content-center.align-items-center
          img(:src="musicImgsrc").img-fluid.title-image
        .col-md-4.col-12
          h5.text-primary {{ readyMusic.title }} 清單
          .music-box.music-overflow
            a(href="#", v-for="item in musicList.data" @click.prevent="playMusic(item)").music-list
              .music-img
                img(:src="item.album.artist.images[0].url")
              .music-title
                div {{ item.name }}
                div {{ item.album.artist.name }}
    iframe(:src="`https://widget.kkbox.com/v1/?id=${musicID}&type=song&terr=TW&lang=TC&autoplay=true`", frameBorder="0", allow="autoplay").iframe#iframeID
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Loading from '@/components/shared/Loading.vue';
import Navbar from './layout/Navbar.vue';

export default {
  data() {
    return {
      hotDate: '',
      musicList: '',
      musicID: '',
      musicImgsrc: {},
    };
  },
  components: {
    Loading,
    Navbar,
  },
  methods: {
    getMusiclist() {
      this.$store.commit('LOADING', true);
      this.musicImgsrc = this.readyMusic.images[2].url;
      this.$http.get(`${process.env.VUE_APP_KKBOXURL}/new-hits-playlists/${this.readyMusic.id}/tracks?territory=TW&limit=20`, this.AJAXConfig).then((res) => {
        this.musicList = res.data;
        this.musicID = res.data.data[0].id;
        this.$store.commit('LOADING', false);
      });
    },
    playMusic(item) {
      this.musicID = item.id;
      this.musicImgsrc = item.album.images[2].url;
    },
    ...mapActions(['getToken']),
  },
  computed: {
    ...mapGetters(['isLoading', 'AJAXConfig', 'readyMusic']),
  },
  created() {
    if (!this.readyMusic.id) {
      this.$router.push('/');
    }
    this.getMusiclist();
  },
};
</script>

<style lang="scss" scoped>
.nav {
  height: 80px;
  border-bottom: 1px solid white;
}
.iframe {
  width: 100%;
  height: 100px;
}
.music-box {
  height: calc(100vh - 80px - 140px);
}
.title-image {
  height: calc(100vh - 80px - 140px);
}
.music-overflow {
  overflow-x: hidden;
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
