<template lang="pug">
  loading(:active.sync='isLoading', :opacity='.85')
    img(src="@/assets/images/output_F2Uvvy.gif")
    p.text-center.text-dark 讀取中...
</template>

<script>
export default {
  props: {
    isLoading: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
