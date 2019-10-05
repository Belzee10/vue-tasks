<template>
  <v-list subheader two-line flat>
    <v-list-item-group>
      <task v-for="task in tasks" :key="task.id" v-bind="task"> </task>
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
  }
};
</script>

<style lang="scss" scoped></style>
