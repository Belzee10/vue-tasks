import Vue from 'vue';
import Vuetify from 'vuetify';
import { shallowMount } from '@vue/test-utils';
import Modal from './Modal.vue';

Vue.use(Vuetify);
describe('Modal.vue', () => {
  test('should emit a close-modal event', () => {
    const wrapper = shallowMount(Modal, {
      propsData: { open: true }
    });
    const button = wrapper.find('[data-test-id="btn-secondary"]');
    button.vm.$emit('click');
    expect(wrapper.emitted()['close-modal']).toHaveLength(1);
  });

  test('should emit a submit-form event', () => {
    const wrapper = shallowMount(Modal, {
      propsData: { open: true }
    });
    const button = wrapper.find('[data-test-id="btn-primary"]');
    button.vm.$emit('click');
    expect(wrapper.emitted()['submit-form']).toHaveLength(1);
  });
});
