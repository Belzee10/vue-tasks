<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline">
        <span>Vue Tasks</span>
      </v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container>
        <v-layout wrap>
          <v-flex xs12>
            <modal
              v-if="isModalOpen"
              :open="isModalOpen"
              @close-modal="closeModal"
              @submit-form="submitForm"
            />
            <v-btn
              class="mb-4 mt-5"
              data-test-id="create-task"
              color="primary"
              @click="openModal"
            >
              New Task
            </v-btn>
            <tasks :tasks="tasks" @confirm-delete="handleDeleteTask" />
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Modal from './components/Modal/Modal.vue';
import Tasks from './components/Tasks/Tasks.vue';
import { getTasks } from './api/api.js';
import axios from 'axios';

export default {
  name: 'App',
  components: {
    Modal,
    Tasks
  },
  data: () => {
    return {
      isModalOpen: false,
      tasks: []
    };
  },
  mounted() {
    getTasks().then(tasks => {
      this.tasks = tasks;
    });
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    // TODO fix this in tests
    async handleDeleteTask(id) {
      try {
        await axios.delete(`http://localhost:3100/tasks/${id}`);
        this.tasks = this.tasks.filter(item => item.id !== id);
      } catch (error) {
        console.log(error);
      }
    },
    // TODO fix this in tests
    async submitForm(data) {
      try {
        const res = await axios.post('http://localhost:3100/tasks', {
          ...data
        });
        this.tasks = [...this.tasks, res.data];
        this.closeModal();
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>
