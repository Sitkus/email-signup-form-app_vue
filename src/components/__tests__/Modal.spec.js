import { Modal } from '@/components';
import { shallowMount } from '@vue/test-utils';

describe('Modal.vue', () => {
  test('renders slot content', () => {
    const wrapper = shallowMount(Modal, {
      slots: {
        default: '<span />'
      }
    });

    expect(wrapper.find('span').exists()).toBeTruthy();
  });

  test('emits on-close when button is clicked', async () => {
    expect.assertions(1);

    const wrapper = shallowMount(Modal);

    wrapper.find('button').trigger('click');

    expect(wrapper.emitted('close-modal')).toHaveLength(1);
  });
});
