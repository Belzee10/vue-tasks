import Vuetify from 'vuetify';
import { mount, createLocalVue } from '@vue/test-utils';
import ProgressBar from './ProgressBar.vue';

const localVue = createLocalVue();

describe('ProgressBar', () => {
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  const mountFunction = options => {
    return mount(ProgressBar, {
      localVue,
      vuetify,
      ...options
    });
  };

  test('should hidden on initial render', () => {
    const wrapper = mountFunction();
    const progressBar = wrapper.find('.v-progress-linear');
    expect(progressBar.element.style.height).toBe('0px');
  });

  test('should be visible when the prop active changes', () => {
    const wrapper = mountFunction({
      propsData: { active: true }
    });
    const progressBar = wrapper.find('.v-progress-linear');
    expect(progressBar.element.style.height).toBe('4px');
  });
});
