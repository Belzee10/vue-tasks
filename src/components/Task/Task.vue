<template>
  <v-list-item>
    <v-list-item-content>
      <v-list-item-title>{{ title }}</v-list-item-title>
      <v-list-item-subtitle>{{ description }} </v-list-item-subtitle>
      <v-list-item-action>
        <v-btn :color="getButtonColor" @click="handleDelete">
          <span v-if="confirming">Confirm</span>
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </v-list-item-action>
    </v-list-item-content>
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
      confirming: false
    };
  },
  computed: {
    getButtonColor() {
      return this.confirming ? 'error' : '';
    }
  },
  watch: {
    confirming() {
      if (this.confirming) {
        this.timer = setTimeout(() => {
          this.confirming = false;
        }, 1000);
      }
    }
  },
  beforeDestroy() {
    clearTimeout(this.timer);
  },
  methods: {
    handleDelete() {
      if (!this.confirming) this.confirming = true;
      else this.$emit('confirm-delete');
    }
  }
};
</script>

<style lang="scss" scoped></style>
