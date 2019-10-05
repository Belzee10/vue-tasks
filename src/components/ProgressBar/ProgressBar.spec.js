import Vue from 'vue';
import Vuetify from 'vuetify';
import { mount } from '@vue/test-utils';
import ProgressBar from './ProgressBar.vue';

Vue.use(Vuetify);
describe('ProgressBar', () => {
  const wrapper = mount(ProgressBar, {});
  test('should hidden on initial render', () => {
    const progressBar = wrapper.find('.v-progress-linear');
    expect(progressBar.element.style.height).toBe('0px');
  });
  test('should initilize with width 0%', () => {
    const progressBarLine = wrapper.find(
      '.v-progress-linear .v-progress-linear__determinate'
    );
    expect(progressBarLine.element.style.width).toBe('0%');
  });
});
