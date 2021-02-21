<template>
  <form name="email-form" class="form" @submit="onSubmit">
    <input class="form__input" type="email" v-model="email" placeholder="email@gmail.com" />

    <div class="form__competition">
      <p class="form__competition-question">
        Would you like to enter competition?
      </p>

      <label class="form__label">
        Yes
        <input class="form__radio" type="radio" v-model="enterCompetition" value="yes" name="enterCompetition" />
      </label>
      <label>
        No
        <input class="form__radio" type="radio" v-model="enterCompetition" value="no" name="enterCompetition" />
      </label>
    </div>

    <button class="form__button" type="submit">Submit</button>
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

<style scoped lang="scss">
.form {
  display: flex;
  flex-wrap: wrap;
  margin-top: 2rem;
  width: 40rem;

  &__input {
    flex: 0 0 100%;
    padding: 1rem 1.5rem;
  }

  &__competition {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex: 0 0 100%;
    margin: 2rem 0;
  }

  &__competition-question {
    flex: 0 0 100%;
    text-align: center;
    margin-bottom: 0.5rem;
  }

  &__radio {
    margin-right: 1rem;

    &:last-of-type {
      margin-right: 0;
    }
  }

  &__button {
    flex: 0 0 100%;
    padding: 1rem 1.5rem;
    cursor: pointer;
  }
}
</style>
