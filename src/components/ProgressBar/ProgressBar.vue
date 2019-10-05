<template>
  <v-progress-linear :value="value" :active="active"></v-progress-linear>
</template>

<script>
export default {
  name: 'ProgressBar',
  props: {
    active: {
      type: Boolean,
      default: false
    },
    value: {
      type: Number,
      default: 0
    }
  }
};
</script>

<style lang="scss" scoped></style>
