<template>
  <v-list subheader two-line flat>
    <v-list-item-group>
      <task
        v-for="task in tasks"
        :key="task.id"
        v-bind="task"
        @confirm-delete="confirmDelete"
        @complete="handleComplete"
      >
      </task>
    </v-list-item-group>
  </v-list>
</template>

<script>
import Task from '../Task/Task.vue';
export default {
  name: 'Tasks',
  components: {
    Task
  },
  props: {
    tasks: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    confirmDelete(id) {
      this.$emit('confirm-delete', id);
    },
    handleComplete(data) {
      this.$emit('complete', data);
    }
  }
};
</script>

<style lang="scss" scoped></style>
