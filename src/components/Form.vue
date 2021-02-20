<template>
  <form @submit="onSubmit">
    <button type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  name: 'Form',
  methods: {
    onSubmit() {
      this.$emit('form-submitted');
    }
  }
};
</script>
