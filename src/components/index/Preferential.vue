<template lang="pug">
  section
    h3.text-center
      | 還想知道更多?
      br
      span.sub-title 可惜沒有 HexfootMusic Q_Q
    .prime-bg
      .row
        .col-md-6
          .card.border-0.bg-transparent
            .card-body.text-white
              .card-title.d-flex.justify-content-between
                h5 HexfootMusic
              .card-text
                | 底下特權通通享受不到
            .card-body
              table.table.text-center.text-white
                tr
                  th HexfootMusic
                  td
                    | 六腳歌聲聽到怕
                    br
                    | 動態字幕六腳唸給你聽
                tr
                  th HexTV
                  td
                    | 全台最大線上前端影音
                    br
                    | 台灣佛光滿點影音
                tr
                  th
                    | HexTIX
                  td
                    | 六腳國內查理與卡斯柏專屬演唱會與展覽
                    br
                    | 六腳國外查理與卡斯柏專屬演唱會與展覽
                tr
                  th Hex 選物
                  td
                    | 最潮卡斯伯周邊商品
                    br
                    | 獨享滿萬送萬
                tr
                  th Hex Kid
                  td
                    | 海量洧杰佛系有聲教學
                    br
                    | 新手到資深前多元卡斯柏有聲帶
        .col-md-6.d-flex.justify-content-center.align-items-center
          .text-center
            p
              span.text-white.h1.sub-title HexfootMusic
            a(href="#", @click.prevent="buyBtn()").btn.btn-outline-primary.btn-lg 你享受不到
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    buyBtn() {
      this.$swal({
        title: '沒有這個東西存在',
        text: '就跟你說你享受不到了，你點了也沒用',
        type: 'warning',
        showCloseButton: true,
        showLoaderOnConfirm: true,
      });
    },
  },
};
</script>

<style lang="scss">
  .prime-bg {
    background-image: url(../../assets/images/felipe-portella-h6gTtqBZUxc-unsplash.jpg);
    background-position: center center;
    background-size: cover;
    height: 100%;
    position: relative;
    border-radius: 15px;
    &::before {
      content: '';
      border-radius: 15px;
      position: absolute;
      left: 0px;
      right: 0px;
      top: 0px;
      bottom: 0px;
      background-color:rgba(0, 37, 26, 0.75);
    }
  }
  .swal2-actions {
    flex-direction: row-reverse;
  }
</style>
