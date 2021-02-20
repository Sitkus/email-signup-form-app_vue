import { Form } from '@/components';
import { shallowMount } from '@vue/test-utils';

describe('Form.vue', () => {
  test('emits form-submitted when form is submitted', async () => {
    expect.assertions(1);

    const wrapper = shallowMount(Form, {
      mocks: { axios: { post: jest.fn() } }
    });

    await wrapper.find('button').trigger('submit');

    expect(wrapper.emitted('form-submitted')).toHaveLength(1);
  });

  test('sends post request with email on submit', async () => {
    expect.assertions(1);

    const axios = {
      post: jest.fn()
    };
    const wrapper = shallowMount(Form, {
      mocks: {
        axios
      }
    });
    const input = wrapper.find('input[type="email"]');

    input.setValue('email@gmail.com');

    await wrapper.find('button').trigger('submit');

    const url = 'http://demo832975.mockable.io/validate';
    const expectedData = expect.objectContaining({
      email: 'email@gmail.com'
    });

    expect(axios.post).toHaveBeenCalledWith(url, expectedData);
  });

  test('sends post request with enterCompetition checkbox', async () => {
    expect.assertions(1);

    const axios = {
      post: jest.fn()
    };
    const wrapper = shallowMount(Form, {
      mocks: {
        axios
      }
    });
    const url = 'http://demo832975.mockable.io/validate';

    wrapper.find('input[value="no"]').setChecked();

    await wrapper.find('button').trigger('submit');

    const expectedData = expect.objectContaining({
      enterCompetition: false
    });

    expect(axios.post).toHaveBeenCalledWith(url, expectedData);
  });
});
