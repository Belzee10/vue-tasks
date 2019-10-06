import Vue from 'vue';
import Vuetify from 'vuetify';
import { mount } from '@vue/test-utils';
import Task from './Task.vue';

// TODO find another way to stub Vuetify
Vue.use(Vuetify);

beforeEach(() => {
  jest.useFakeTimers();
});

describe('Task.vue', () => {
  const props = {
    id: '1',
    title: 'example',
    description: 'lotem ipsum',
    isComplete: false
  };
  const wrapper = mount(Task, {
    propsData: { ...props }
  });

  test('should show a confirmation button for n secs', () => {
    const button = wrapper.find('.v-btn');
    button.trigger('click');
    expect(button.text()).toContain('Confirm');
    expect(button.classes()).toContain('error');
    jest.runAllTimers();
    expect(button.text()).not.toContain('Confirm');
    expect(button.classes()).not.toContain('error');
  });

  test('should emit a confirm-delete event ', () => {
    const button = wrapper.find('.v-btn');
    button.trigger('click');
    button.trigger('click');
    expect(wrapper.emitted()['confirm-delete']).toBeTruthy();
  });
});
