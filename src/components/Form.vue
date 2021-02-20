<template>
  <form name="email-form" @submit="onSubmit">
    <input type="email" v-model="email" />

    <button type="submit">Submit</button>

    <input type="radio" v-model="enterCompetition" value="yes" name="enterCompetition" />
    <input type="radio" v-model="enterCompetition" value="no" name="enterCompetition" />
  </form>
</template>

<script>
export default {
  name: 'Form',
  data() {
    return {
      email: null,
      enterCompetition: 'yes'
    };
  },
  methods: {
    onSubmit() {
      this.axios.post('http://demo832975.mockable.io/validate', {
        email: this.email,
        enterCompetition: this.enterCompetition === 'yes'
      });

      this.$emit('form-submitted');
    }
  }
};
</script>
