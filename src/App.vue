<template>
  <main class="main">
    <Modal v-if="displayModal" @close-modal="closeModal">
      <Form @form-submitted="closeModal" />
    </Modal>
  </main>
</template>

<script>
import { Form, Modal } from './components';

export default {
  name: 'App',
  data() {
    return {
      displayModal: true
    };
  },
  components: {
    Form,
    Modal
  },
  methods: {
    closeModal() {
      this.displayModal = false;
    }
  }
};
</script>

<style lang="scss">
.main {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>
