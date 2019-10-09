<template>
  <v-dialog v-model="open" :attach="true">
    <v-card>
      <v-card-title>
        Create task
      </v-card-title>
      <v-card-text>
        <v-form ref="form" v-model="valid">
          <v-text-field v-model="title" class="title" label="Title" />
          <v-text-field
            v-model="description"
            class="description"
            label="Description"
          />
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn data-test-id="save" color="primary" @click="onSubmit">
          Save
        </v-btn>
        <v-btn data-test-id="close" color="secondary" @click="onClose">
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
  data() {
    return {
      title: '',
      description: '',
      valid: true
    };
  },
  methods: {
    onClose() {
      this.$emit('close-modal');
    },
    onSubmit() {
      if (this.$refs.form.validate()) {
        this.$emit('submit-form', {
          title: this.title,
          description: this.description
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
