<template lang="pug">
  header
    .bg-images.container-fluid
      .row.bg-text.text-center
        .col-md-12.col-12
          h2.font-weight-bold KKBOX OPEN API 串接範例
          vue-typed-js(:strings="['KKBOX x HexfootMusic API 串接範例']", :startDelay="delay").justify-content-center
            p
              span.typing
        .col-md-3.col-6
          h5 最多曲風
          ICountUp(:delay="delay", :endVal="StyleVal")
        .col-md-3.col-6
          h5 最大曲庫
          p
            | 超過
            |
            ICountUp(:delay="delay", :endVal="MaxVal")
            |
            | 萬
        .col-md-3.col-6
          h5 多樣支援
          .icons
            a(href="#" target="_blank").pr-1.hex-text
              font-awesome-icon(:icon="['fab', 'android']", size="2x")
            a(href="#" target="_blank").pr-1.hex-text
              font-awesome-icon(:icon="['fab', 'apple']", size="2x")
            a(href="#" target="_blank").hex-text
              font-awesome-icon(:icon="['fab', 'windows']", size="2x")
        .col-md-3.col-6
          h5 HexFoot♫
          p 你享受不到
</template>

<script>
import ICountUp from 'vue-countup-v2';

export default {
  components: {
    ICountUp,
  },
  data() {
    return {
      delay: 1000,
      StyleVal: 19,
      MaxVal: 4500,
    };
  },
};
</script>

<style lang="scss">

</style>
