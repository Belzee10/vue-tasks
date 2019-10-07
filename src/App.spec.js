import Vue from 'vue';
import Vuetify from 'vuetify';
import { mount, createLocalVue } from '@vue/test-utils';
import flushPromises from 'flush-promises';
import { getTasks } from './api/api.js';
import mockAxios from 'jest-mock-axios';
import App from './App.vue';
import Task from './components/Task/Task.vue';
import Modal from './components/Modal/Modal.vue';

jest.mock('./api/api.js');

Vue.use(Vuetify);
const localVue = createLocalVue();

describe('App.vue', () => {
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  afterEach(() => {
    mockAxios.reset();
  });

  const mountFunction = options => {
    return mount(App, {
      localVue,
      vuetify,
      ...options
    });
  };

  test('should pass the tasks to the Tasks cmp', async () => {
    expect.assertions(3);
    const tasks = [
      { id: 1, title: '', description: '', isComplete: false },
      { id: 2, title: '', description: '', isComplete: false }
    ];
    getTasks.mockResolvedValueOnce(tasks);

    const wrapper = mountFunction();
    await flushPromises();

    const Tasks = wrapper.findAll(Task);
    expect(Tasks).toHaveLength(tasks.length);

    Tasks.wrappers.forEach((wrapper, i) => {
      expect(wrapper.props()).toEqual(tasks[i]);
    });
  });

  test('should open the Modal', () => {
    const wrapper = mountFunction();
    expect(wrapper.find(Modal).exists()).toBeFalsy();
    const button = wrapper.find('[data-test-id="create-task"]');
    button.trigger('click');
    expect(wrapper.find(Modal).exists()).toBeTruthy();
  });

  test('should send a post request', () => {
    const wrapper = mountFunction();
    wrapper.find('[data-test-id="create-task"]').trigger('click');
    expect(wrapper.find(Modal).exists()).toBeTruthy();
    const titleInput = wrapper.find('.title input');
    const descriptionInput = wrapper.find('.description input');
    titleInput.setValue('lorem');
    descriptionInput.setValue('desc');
    wrapper.find('[data-test-id="btn-primary"]').trigger('click');
    expect(wrapper.find(Modal).emitted('submit-form')).toEqual([
      [
        {
          title: 'lorem',
          description: 'desc'
        }
      ]
    ]);
    const url = 'http://localhost:3100/tasks';
    const expectedData = expect.objectContaining({
      title: 'lorem',
      description: 'desc'
    });
    expect(mockAxios.post).toHaveBeenCalledWith(url, expectedData);
  });
});
