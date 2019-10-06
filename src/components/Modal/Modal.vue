<template>
  <v-dialog v-model="open">
    <v-card>
      <v-card-title>
        Create task
      </v-card-title>
      <v-card-text> </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn data-test-id="btn-primary" color="primary" @click="onSubmit">
          Save
        </v-btn>
        <v-btn data-test-id="btn-secondary" color="secondary" @click="onClose">
          Close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    open: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClose() {
      this.$emit('close-modal');
    },
    onSubmit() {
      this.$emit('submit-form');
    }
  }
};
</script>

<style lang="scss" scoped></style>
