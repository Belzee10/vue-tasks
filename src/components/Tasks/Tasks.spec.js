import Vue from 'vue';
import Vuetify from 'vuetify';
import { mount } from '@vue/test-utils';
import Tasks from './Tasks.vue';
import Task from '../Task/Task.vue';

Vue.use(Vuetify);
describe('Tasks.vue', () => {
  const props = {
    tasks: [
      { id: '1', title: '', description: '', isComplete: false },
      { id: '2', title: '', description: '', isComplete: false }
    ]
  };
  const wrapper = mount(Tasks, {
    propsData: { ...props }
  });

  test('should render a Task for each Task', () => {
    const tasks = wrapper.findAll(Task);
    expect(tasks).toHaveLength(props.tasks.length);
    tasks.wrappers.forEach((wrapper, i) => {
      expect(wrapper.props()).toEqual(props.tasks[i]);
    });
  });
});
