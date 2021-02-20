<template>
  <div>
    <Modal v-if="displayModal" :onClose="closeModal">
      <Form @form-submitted="closeModal" />
    </Modal>
  </div>
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
//
</style>
