<template lang="pug">
  section
    h3.text-center
      | 還想聽更多?
      br
      span.sub-title 那就來購買 HexfootMusic Prime 吧!
    .prime-bg
      .row
        .col-md-6
          .card.border-0.bg-transparent
            .card-body.text-white
              .card-title.d-flex.justify-content-between
                h5 HexfootMusic Prime
                span NT$ 99,999
              .card-text
                | 一個帳號 享受多種服務
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
                    br
                    | 限定優惠
                  td
                    | 六腳國內洧杰與卡斯柏專屬演唱會與展覽
                    br
                    | 六腳國外洧杰與卡斯柏專屬演唱會與展覽
                tr
                  th Hex 選物
                  td
                    | 最潮卡斯伯周邊商品
                    br
                    | Prime 獨享滿萬送萬
                tr
                  th Hex Kids
                  td
                    | 海量洧杰佛系有聲教學
                    br
                    | 新手到資深前多元卡斯柏有聲帶
                tr
                  th
                    | Prime
                    br
                    | 獨享優惠
                  td
                    | 假同學會門票加碼抽
                    br
                    | 付費抽 VIP 專場/展演門票
        .col-md-6.d-flex.justify-content-center.align-items-center
          .text-center
            p
              span.text-white.h1.sub-title HexfootMusic
            a(href="#" @click.prevent="buyBtn()").btn.btn-outline-primary.btn-lg 立即購買
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
        title: '即將進入購買頁面',
        text: '點擊購買後將跳出購買視窗。',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: '我要爆買一波',
        cancelButtonText: '下次再買',
        showCloseButton: true,
        showLoaderOnConfirm: true,
      }).then((result) => {
        if (result.value) {
          return this.$swal({
            title: '請提供您的 Email 信箱',
            input: 'email',
            inputPlaceholder: 'Email...',
            showCloseButton: true,
            showCancelButton: true,
            cancelButtonText: '取消',
            confirmButtonText: '送出',
          });
        }
        return this.$swal({
          title: '取消購買',
          text: '您已放棄購買',
          type: 'info',
          showConfirmButton: false,
          showCancelButton: true,
          cancelButtonText: '關閉',
          showCloseButton: true,
          showLoaderOnConfirm: false,
        });
      }).then((result) => {
        if (result.value) {
          this.$swal('你被騙了。', '傻子誰要賣你啊', 'warning');
        }
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
