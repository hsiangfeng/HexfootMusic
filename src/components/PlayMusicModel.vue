<template lang="pug">
  #musicModal.modal.fade(tabindex='-1', role='dialog', aria-labelledby='exampleModalLabel', aria-hidden='true')
    .modal-dialog(role='document')
      .modal-content.bg-dark.overflow-hidden
        .modal-header
          h5#exampleModalLabel.modal-title.text-white
            | 現在播放 {{ musicSrc.title }}
          button.close(type='button', data-dismiss='modal', aria-label='Close')
            span(aria-hidden='true').text-white ×
        .modal-body.iframe-hideborder
          iframe(:src="`https://widget.kkbox.com/v1/?id=${musicSrc.id}&type=${musicSrc.type}&terr=${musicSrc.terr}&lang=${musicSrc.lang}&autoplay=${musicSrc.autoplay}`", frameBorder="0", allow="autoplay").iframe#iframeID
</template>

<script>
export default {
  props: {
    musicSrc: {
      type: Object,
      default() {
        return {
          id: '0otAoi0Eu_GpAJGfcF',
          type: 'album',
          terr: 'TW',
          lang: 'TC',
          autoplay: false,
        };
      },
    },
  },
  data() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>
.smallPlay {
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
}
.model-bg {
  background-color: #00251a;
  color: #69F0AE;
}
.iframe {
  width: 100%;
  height: 500px;
}
.modal-body {
  padding: 0px;
}
.iframe-hideborder {
  margin: -6px;
}
</style>
