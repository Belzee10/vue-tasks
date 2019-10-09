<template>
  <v-list-item>
    <v-list-item-icon>
      <v-checkbox
        v-model="complete"
        color="primary"
        @change="handleComplete"
      ></v-checkbox>
    </v-list-item-icon>
    <v-list-item-content :class="getTypography">
      <v-list-item-title>{{ title }}</v-list-item-title>
      <v-list-item-subtitle>{{ description }} </v-list-item-subtitle>
    </v-list-item-content>
    <v-list-item-action>
      <v-btn
        :color="getButtonColor"
        data-test-id="confirm"
        @click="handleDelete"
      >
        <span v-if="confirming">Confirm</span>
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </v-list-item-action>
  </v-list-item>
</template>

<script>
export default {
  name: 'Task',
  props: {
    id: {
      type: Number,
      default: 0
    },
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    isComplete: {
      type: Boolean,
      default: false
    }
  },
  data: () => {
    return {
      confirming: false,
      complete: false
    };
  },
  computed: {
    getButtonColor() {
      return this.confirming ? 'error' : '';
    },
    getTypography() {
      return this.complete ? 'font-italic font-weight-light' : '';
    }
  },
  watch: {
    confirming() {
      if (this.confirming) {
        this.timer = setTimeout(() => {
          this.confirming = false;
        }, 2000);
      }
    }
  },
  created() {
    this.complete = this.isComplete;
  },
  beforeDestroy() {
    clearTimeout(this.timer);
  },
  methods: {
    handleDelete() {
      if (!this.confirming) this.confirming = true;
      else this.$emit('confirm-delete', this.id);
    },
    handleComplete() {
      this.$emit('complete', {
        id: this.id,
        isComplete: this.complete,
        title: this.title,
        description: this.description
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>
