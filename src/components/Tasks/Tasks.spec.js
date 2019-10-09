import Vuetify from 'vuetify';
import { mount, createLocalVue } from '@vue/test-utils';
import Tasks from './Tasks.vue';
import Task from '../Task/Task.vue';

const localVue = createLocalVue();

describe('Tasks.vue', () => {
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  const props = {
    tasks: [
      { id: 1, title: '', description: '', isComplete: false },
      { id: 2, title: '', description: '', isComplete: false }
    ]
  };

  test('should render a Task for each Task', () => {
    const wrapper = mount(Tasks, {
      localVue,
      vuetify,
      propsData: { ...props }
    });
    const tasks = wrapper.findAll(Task);
    expect(tasks).toHaveLength(props.tasks.length);
    tasks.wrappers.forEach((wrapper, i) => {
      expect(wrapper.props()).toEqual(props.tasks[i]);
    });
  });
});
