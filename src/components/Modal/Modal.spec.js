import Vue from 'vue';
import Vuetify from 'vuetify';
import { mount, createLocalVue } from '@vue/test-utils';
import Modal from './Modal.vue';

Vue.use(Vuetify);
const localVue = createLocalVue();

describe('Modal.vue', () => {
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  const mountFunction = options => {
    return mount(Modal, {
      localVue,
      vuetify,
      ...options
    });
  };

  test('should emit a close-modal event', () => {
    const wrapper = mountFunction({
      propsData: { open: true }
    });
    const button = wrapper.find('[data-test-id="btn-secondary"]');
    button.vm.$emit('click');
    expect(wrapper.emitted()['close-modal']).toHaveLength(1);
  });

  test('should emit a submit-form event', () => {
    const wrapper = mountFunction({
      propsData: { open: true }
    });
    const button = wrapper.find('[data-test-id="btn-primary"]');
    button.vm.$emit('click');
    expect(wrapper.emitted()['submit-form']).toHaveLength(1);
  });
});
