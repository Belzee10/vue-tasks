import Vuetify from 'vuetify';
import { mount, createLocalVue } from '@vue/test-utils';
import Modal from './Modal.vue';

const localVue = createLocalVue();

describe('Modal.vue', () => {
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  test('should emit a "close-modal" event', () => {
    const wrapper = mount(Modal, {
      vuetify,
      localVue,
      propsData: { open: true }
    });
    const button = wrapper.find('.secondary');
    expect(button.text()).toContain('Close');
    button.trigger('click');
    expect(wrapper.emitted()['close-modal']).toHaveLength(1);
  });

  test('should emit a submit-form event', () => {
    const wrapper = mount(Modal, {
      vuetify,
      localVue,
      propsData: { open: true }
    });
    const button = wrapper.find('.primary');
    button.trigger('click');
    expect(wrapper.emitted()['submit-form']).toHaveLength(1);
  });
});
