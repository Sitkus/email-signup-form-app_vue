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

  test('calls onClose when button is clicked', async () => {
    expect.assertions(1);

    const onClose = jest.fn();
    const wrapper = shallowMount(Modal, {
      propsData: {
        onClose
      }
    });

    await wrapper.find('button').trigger('click');

    expect(onClose).toHaveBeenCalled();
  });
});
