import Vue from 'vue';
import Vuetify from 'vuetify';
import { shallowMount } from '@vue/test-utils';
import Task from './Task.vue';

// TODO find another way to stub Vuetify
Vue.use(Vuetify);
describe('Task.vue', () => {
  const props = {
    id: '1',
    title: 'example',
    description: 'lotem ipsum',
    isComplete: false
  };
  const wrapper = shallowMount(Task, {
    propsData: { ...props }
  });
  test('should render the correct text bassed on the props', () => {
    expect(wrapper.text()).toContain(props.title);
    expect(wrapper.text()).toContain(props.description);
  });
});
