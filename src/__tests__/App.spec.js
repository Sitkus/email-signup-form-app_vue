import App from '../App.vue';
import { Modal } from '@/components';
import { shallowMount } from '@vue/test-utils';

describe('App.vue', () => {
  test('hides Modal when Modal emits close-modal', async () => {
    expect.assertions(1);

    const wrapper = shallowMount(App);

    await wrapper.findComponent(Modal).vm.$emit('close-modal');

    expect(wrapper.findComponent(Modal).exists()).toBeFalsy();
  });
});
