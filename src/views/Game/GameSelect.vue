<template lang="pug">
  main
    Loading(:isLoading="isLoading")
    section.section
      .container.bg-game-select
        div(v-if="!gameMode")
          .row.text-center
            .col-md-12.text-white
              h3 請選擇遊戲模式
              p 一般模式：音樂播放 30 秒後才能選擇答案。
              p 30 秒模式：請在 30 秒內選出歌曲名稱。
              p 推薦遊玩練習模式，30 秒模式可能會因為網路延遲而導致音樂播放延遲。
            .col-md-6.col-6
              button.btn.btn-primary.btn-lg(type="button", @click="playGameMode('learn')") 練習模式
            .col-md-6.col-6
              button.btn.btn-primary.btn-lg(type="button", @click="playGameMode('ordinary')") 30 秒模式
        .text-center(v-if="gameMode === 'ordinary'")
          .row
            .col-md-12.text-primary.font-weight-bold
              h2 30 秒模式規則
              p 請 30 秒內選出正確答案。
              p 注意：30 秒模式請在網路穩定狀況下遊玩，否則可能會延遲。
              p 總題數為 25 題。
            .col-md-3.col-6
              .list-group
                router-link(:to="{name: 'Ordinary', params:{ id: item.id } }", v-for="item, index in quStyle.slice(0, 5)", :key="index").list-group-item.list-group-item-action.list-group-item-dark
                  p.font-weight-bold.m-0 ♫ {{ item.title }}
            .col-md-3.col-6
              .list-group
                router-link(:to="{name: 'Ordinary', params: { id: item.id } }", v-for="item, index in quStyle.slice(5, 10)", :key="index").list-group-item.list-group-item-action
                    p.font-weight-bold.m-0 ♫ {{ item.title }}
            .col-md-3.col-6
              .list-group
                router-link(:to="{name: 'Ordinary', params: { id: item.id } }", v-for="item, index in quStyle.slice(10, 15)", :key="index").list-group-item.list-group-item-action.list-group-item-dark
                  p.font-weight-bold.m-0 ♫ {{ item.title }}
            .col-md-3.col-6
              .list-group
                router-link(:to="{name: 'Ordinary', params: { id: item.id } }", v-for="item, index in quStyle.slice(15, 20)", :key="index").list-group-item.list-group-item-action
                  p.font-weight-bold.m-0 ♫ {{ item.title }}
            .col-md-12
              button.btn.btn-primary.btn-lg.my-5(type="input" @click="playGameMode('')") 返回模式選擇
        .text-center(v-if="gameMode === 'learn'")
          .row
            .col-md-12.text-primary.font-weight-bold
              h2 一般模式遊戲規則
              p 請在底下選擇要挑戰的歌曲類別，音樂將會播放 30 秒，選項只會在 30 秒後播放完畢出現選擇答案選項。
              p 題目共有 25 題，結束時將會公布成績。
            .col-md-3.col-6
              .list-group
                router-link(:to="{name: 'Learningmode', params:{ id: item.id } }", v-for="item, index in quStyle.slice(0, 5)", :key="index").list-group-item.list-group-item-action.list-group-item-dark
                  p.font-weight-bold.m-0 ♫ {{ item.title }}
            .col-md-3.col-6
              .list-group
                router-link(:to="{name: 'Learningmode', params: { id: item.id } }", v-for="item, index in quStyle.slice(5, 10)", :key="index").list-group-item.list-group-item-action
                    p.font-weight-bold.m-0 ♫ {{ item.title }}
            .col-md-3.col-6
              .list-group
                router-link(:to="{name: 'Learningmode', params: { id: item.id } }", v-for="item, index in quStyle.slice(10, 15)", :key="index").list-group-item.list-group-item-action.list-group-item-dark
                  p.font-weight-bold.m-0 ♫ {{ item.title }}
            .col-md-3.col-6
              .list-group
                router-link(:to="{name: 'Learningmode', params: { id: item.id } }", v-for="item, index in quStyle.slice(15, 20)", :key="index").list-group-item.list-group-item-action
                  p.font-weight-bold.m-0 ♫ {{ item.title }}
            .col-md-12
              button.btn.btn-primary.btn-lg.my-5(type="input" @click="playGameMode('')") 返回模式選擇
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Loading from '@/components/shared/Loading.vue';

export default {
  data() {
    return {
      quStyle: '',
      gameMode: '',
    };
  },
  methods: {
    getReleaseCategories() {
      this.$store.commit('LOADING', true);

      this.$http.get(`${process.env.VUE_APP_KKBOXURL}/charts?territory=TW`, this.AJAXConfig)
        .then((res) => {
          this.quStyle = res.data.data;
          this.$store.commit('LOADING', false);
        });
    },
    playGameMode(model) {
      this.gameMode = model;
    },
    ...mapActions(['getToken']),
  },
  components: {
    Loading,
  },
  computed: {
    ...mapGetters(['isLoading', 'AJAXConfig']),
  },
  async created() {
    await this.getToken();
    this.getReleaseCategories();
  },
};
</script>

<style lang="scss">
  .bg-game-select{
    background-image: url(../../assets/images/glenn-carstens-peters-0woyPEJQ7jc-unsplash.jpg);
    background-size: cover;
    background-position: center;
    padding: 100px 0px;
    position: relative;
    border-radius: 10px;
    &::before{
      content: '';
      position: absolute;
      left: 0px;
      right: 0px;
      top: 0px;
      bottom: 0px;
      background-color: rgba(0, 37, 26, 0.75);
      border-radius: 10px;
    }
  }
</style>
