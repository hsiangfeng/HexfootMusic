<template lang="pug">
  section.game-section
    Loading(:isLoading="isLoading")
    .container
      //- 挑戰起始畫面
      .srart-bg.d-flex.justify-content-center.align-items-center.flex-column(v-if="playStatus")
        p.h3.text-primary.z-index-1 點擊 開始挑戰 後將會播放歌曲 30 秒。
        .music-start.z-index-1
          button.btn.btn-outline-primary.btn-lg(type='button', @click="startGame")
            | 開始挑戰
      //- 音樂播放畫面
      .srart-bg.d-flex.justify-content-center.align-items-center.flex-column.w-100(v-if="musicPlay.status")
        radial-progress-bar.position-relative.text-white(:diameter='progressOption.diameter', :completed-steps='progressOption.completedSteps', :total-steps='progressOption.totalSteps')
          .play-bg
          .play-title
            font-awesome-icon(:icon="['fas', 'sync']" size="3x" v-if="musicPlay.status" spin).my-5
            font-awesome-icon(:icon="['fas', 'stop']" size="3x" v-else="musicPlay.status").my-5
            p(v-if="progressOption.completedSteps < 10") 00:0{{ progressOption.completedSteps }}
            p(v-else) 00:{{ progressOption.completedSteps }}
      //- 開始猜歌曲
      .row(v-if="musicPlay.status")
        .col-md-6.col-6(v-for="item in filterData").py-2
          a.btn-answer(href="#", @click.prevent="resetGame(item)")
            | {{ item.name }}
      //- 結算成績
      .row.srart-bg.text-center.text-primary(v-if="score.status")
        .col-md-12.d-flex.justify-content-center.align-items-center
          h3 總題數為 {{ musicPlay.kkboxMusic.length / 4 }} 題
        .col-md-6.col-6.h4
          | 您目前答對 {{ score.answerNum }} 題
        .col-md-6.col-6.h4
          | 您目前答錯 {{ score.wrongNum }} 題
        .col-md-12.text-center
          router-link(to="/game").btn.btn-primary
            | 返回遊戲首頁
    //- 音樂播放器
    .iframe.d-none
      iframe(src='https://widget.kkbox.com/v1/?id=SoKONLgs1DbhbrbMq3&type=song&terr=TW&lang=TC', frameBorder="0")#iframeID
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import RadialProgressBar from 'vue-radial-progress';
import Loading from '@/components/shared/Loading.vue';

export default {
  data() {
    return {
      challengeID: '',
      progressOption: {
        completedSteps: 0,
        totalSteps: 30,
        diameter: 300,
        setInter: null,
        setTime: null,
      },

      playStatus: true,
      musicPlay: {
        number: 1,
        status: false,
        kkboxMusic: [],
        startNum: 0,
        endNum: 4,
      },
      nowPlayMusic: {
        id: 'SoKONLgs1DbhbrbMq3',
      },
      score: {
        wrongNum: 0,
        answerNum: 0,
        result: 0,
        status: false,
      },
    };
  },
  metaInfo() {
    return {
      title: this.metaTitle || 'HexfootMusic',
    };
  },
  methods: {
    async getMusic() {
      this.$store.commit('LOADING', true);

      await this.$http.get(`${process.env.VUE_APP_KKBOXURL}/charts/${this.challengeID}/tracks?territory=TW&limit=100`, this.AJAXConfig)
        .then(async (res) => {
          this.musicPlay.kkboxMusic = res.data.data;
          this.$store.commit('LOADING', false);
        });
    },
    startGame() {
      this.progressOption.setInter = setInterval(() => {
        this.progressOption.completedSteps += 1;
      }, 1000);

      this.progressOption.setTime = setTimeout(() => {
        const iframeID = document.getElementById('iframeID');
        iframeID.src = 'https://widget.kkbox.com/v1/?id=SoKONLgs1DbhbrbMq3&type=song&terr=TW&lang=TC';
        this.score.status = true;
        this.musicPlay.status = false;
        this.musicPlay.title = '音樂播放結束，請猜題。';
        clearInterval(this.progressOption.setInter);
      }, 30000);
      this.initGame();
    },
    async initGame() {
      this.$store.commit('LOADING', true);
      this.playStatus = false;
      this.musicPlay.status = true;

      const randomNum = await this.getRandom(0, 4);
      this.nowPlayMusic = await this.filterData[randomNum];

      const iframeID = document.getElementById('iframeID');
      iframeID.src = `https://widget.kkbox.com/v1/?id=${this.nowPlayMusic.id}&type=song&terr=TW&lang=TC&autoplay=true`;
      iframeID.setAttribute('allow', 'autoplay');
      iframeID.onload = () => {
        this.$store.commit('LOADING', false);
      };
    },
    async getRandom(min, max) {
      return await Math.floor(Math.random() * max) + min;
    },
    resetGame(item) {
      if (item.id === this.nowPlayMusic.id) {
        this.score.answerNum += 1;
      } else {
        this.score.wrongNum += 1;
      }

      if (this.score.answerNum + this.score.wrongNum === 25) {
        this.score.status = true;
        return;
      }

      this.musicPlay.startNum += 4;
      this.musicPlay.endNum += 4;

      this.initGame();
    },
    getTitle() {
      this.$store.dispatch('getMetaTitle', this.$route.meta.title);
    },
    ...mapActions(['getToken']),
  },
  components: {
    Loading,
    RadialProgressBar,
  },
  computed: {
    filterData() {
      return this.musicPlay.kkboxMusic.slice(this.musicPlay.startNum, this.musicPlay.endNum);
    },
    ...mapGetters(['isLoading', 'AJAXConfig', 'metaTitle']),
  },
  async mounted() {
    await this.getToken();

    this.challengeID = this.$route.params.id;
    await this.getMusic();
    this.getTitle();
  },
};
</script>

<style lang="scss" scoped>
  .btn-answer {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    padding: 15px;
    font-weight: 800;
    font-size: 14px;
    background-color: #69F0AE;
    color: #00251a;
    text-decoration: none;
    width: 100%;
    height: 100px;
    transition: all 0.5s;
    &:hover {
      color: white;
      background-color: #00251a;
    }
  }
  .srart-bg {
    background-image: url(../../assets/images/desi-mendoza-CuSHBGBdXc0-unsplash.jpg);
    background-position: center;
    background-size: cover;
    margin: 10px 0px;
    height: 450px;
    position: relative;
    border-radius: 10px;
    &::before {
      content: '';
      position: absolute;
      left: 0px;
      right: 0px;
      top: 0px;
      bottom: 0px;
      border-radius: 10px;
      background-color: rgba(0, 37, 26, 0.75);
    }
  }
  .play-bg {
    background-image: url(../../assets/images/bruno-cervera-dtqlaz4HyHw-unsplash.jpg);
    background-position: center;
    background-size: cover;
    position: absolute;
    left: 5px;
    right: 5px;
    top: 15px;
    bottom: 15px;
    border-radius: 50%;
  }
  .play-title {
    text-align: center;
    z-index: 1;
  }
  .answer-bg {
    background-image: url(../../assets/images/evan-dennis-i--IN3cvEjg-unsplash.jpg);
    background-position: center;
    background-size: cover;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    &::before {
      content: '';
      position: absolute;
      left: 0px;
      right: 0px;
      top: 0px;
      bottom: 0px;
      border-radius: 10px;
      background-color: rgba(0, 37, 26, 0.5);
    }
  }
</style>
