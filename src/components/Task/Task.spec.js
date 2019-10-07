import Vue from 'vue';
import Vuetify from 'vuetify';
import { mount } from '@vue/test-utils';
import Task from './Task.vue';

Vue.use(Vuetify);

describe('Task.vue', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  const props = {
    id: 1,
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

  // test('should put the checkbox as checked and mark the text', () => {
  //   const wrapper = mount(Task, {
  //     propsData: {
  //       ...props,
  //       isComplete: true
  //     }
  //   });
  //   const checkbox = wrapper.find('.v-input--checkbox');
  // });

  test('should emit a complete-task event', () => {});
});
