<template lang="pug">
  section
    h3 熱門歌單
    .row
      .col-md-3.col-6(v-for="item in hotList.data")
        a(href="#" @click.prevent="playView(item)").music-play.text-decoration-none
          img(:src="item.images[0].url").img-fluid
          .playbox
            .onplay.d-flex.justify-content-center.align-items-center
              font-awesome-icon(:icon="['far', 'play-circle']" size="3x")
          .text-dark.font-weight-bold.sub-title {{ item.title }}

</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      hotList: '',
    };
  },
  methods: {
    gethotPlaylist() {
      const hotPlaylistUrl = `${process.env.VUE_APP_KKBOXURL}/new-hits-playlists?territory=TW`;

      this.$http.get(hotPlaylistUrl, this.AJAXConfig)
        .then((res) => {
          this.hotList = res.data;
        });
    },
    playView(item) {
      this.$store.commit('READYMUSIC', item);
      this.$router.push('/playview');
    },
  },
  computed: {
    ...mapGetters(['AJAXConfig']),
  },
  created() {
    this.gethotPlaylist();
  },
};
</script>
