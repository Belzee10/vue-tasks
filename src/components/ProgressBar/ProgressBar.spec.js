import Vuetify from 'vuetify';
import { mount, createLocalVue } from '@vue/test-utils';
import ProgressBar from './ProgressBar.vue';

const localVue = createLocalVue();

describe('ProgressBar', () => {
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  test('should hidden on initial render', () => {
    const wrapper = mount(ProgressBar, {
      localVue,
      vuetify
    });
    const progressBar = wrapper.find('.v-progress-linear');
    expect(progressBar.element.style.height).toBe('0px');
  });

  test('should be visible when the prop active is true', () => {
    const wrapper = mount(ProgressBar, {
      localVue,
      vuetify,
      propsData: { active: true }
    });
    const progressBar = wrapper.find('.v-progress-linear');
    expect(progressBar.element.style.height).toBe('4px');
  });
});
