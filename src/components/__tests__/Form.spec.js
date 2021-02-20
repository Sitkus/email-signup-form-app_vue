import { Form } from '@/components';
import { shallowMount } from '@vue/test-utils';

describe('Form.vue', () => {
  test('emits form-submitted when form is submitted', async () => {
    expect.assertions(1);

    const wrapper = shallowMount(Form);

    await wrapper.find('button').trigger('submit');

    expect(wrapper.emitted('form-submitted')).toHaveLength(1);
  });
});
