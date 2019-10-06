import Vue from 'vue';
import Vuetify from 'vuetify';
import { mount } from '@vue/test-utils';
import ProgressBar from './ProgressBar.vue';

Vue.use(Vuetify);
describe('ProgressBar', () => {
  test('should hidden on initial render', () => {
    const wrapper = mount(ProgressBar, {});
    const progressBar = wrapper.find('.v-progress-linear');
    expect(progressBar.element.style.height).toBe('0px');
  });

  test('should be visible when the prop active changes', () => {
    const wrapper = mount(ProgressBar, {
      propsData: {
        active: true
      }
    });
    const progressBar = wrapper.find('.v-progress-linear');
    expect(progressBar.element.style.height).not.toBe('0px');
  });
});
