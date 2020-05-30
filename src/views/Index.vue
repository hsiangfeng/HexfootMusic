<template lang="pug">
  .container
    Loading(:isLoading="isLoading")
    HotPlaylists(@HotPlaylists="playMusic", v-if="kkboxToken")
    Stylelist(@NewReleaseCategories="playMusic", v-if="kkboxToken")
    Ranking(@Charts="playMusic", v-if="kkboxToken")
    Preferential
    Hexfoot
    PlayMusicModel(:musicSrc="musicObject")
</template>

<script>
/* global $ */
import { mapActions, mapGetters } from 'vuex';
// 讀取效果
import Loading from '@/components/shared/Loading.vue';
// 熱門歌單
import HotPlaylists from '@/components/index/HotPlaylists.vue';
// 歌曲風格
import Stylelist from '@/components/index/Stylelist.vue';
// 排行榜
import Ranking from '@/components/index/Ranking.vue';
// Prime
import Preferential from '@/components/index/Preferential.vue';
// 六腳老師
import Hexfoot from '@/components/index/Hexfoot.vue';
// 音樂播放視窗
import PlayMusicModel from '@/components/PlayMusicModel.vue';

export default {
  data() {
    return {
      musicObject: {
        id: 'DZrC8m29ciOFY2JAm3',
        type: 'playlist',
        autoplay: false,
      },
    };
  },
  metaInfo() {
    return {
      title: this.metaTitle || 'HexfootMusic',
    };
  },
  components: {
    Loading,
    HotPlaylists,
    Stylelist,
    Ranking,
    Preferential,
    Hexfoot,
    PlayMusicModel,
  },
  methods: {
    playMusic(item) {
      this.musicObject = item;
      this.musicObject.type = 'playlist';
      this.musicObject.autoplay = true;
      $('#musicModal').modal('show');

      // Hide Stop Music
      $('#musicModal').on('hidden.bs.modal', () => {
        this.musicObject = {
          id: '0otAoi0Eu_GpAJGfcF',
          type: 'album',
          autoplay: false,
        };
      });
    },
    getTitle() {
      this.$store.dispatch('getMetaTitle', this.$route.meta.title);
    },
    ...mapActions(['getToken']),
  },
  computed: {
    ...mapGetters(['isLoading', 'kkboxToken', 'metaTitle']),
  },
  async created() {
    await this.getToken();
    this.getTitle();
  },
};
</script>
