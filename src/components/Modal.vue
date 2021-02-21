<template>
  <div class="modal">
    <button class="modal__button" @click="$emit('close-modal')">X</button>
    <slot />
  </div>
</template>

<style scoped lang="scss">
.modal {
  display: flex;
  flex-direction: column;
  padding: 3rem;
  background-color: $pale-yellow;

  &__button {
    align-self: flex-end;
    background-color: $black;
    color: $pale-yellow;
    border: none;
    padding: 0.5rem;
    cursor: pointer;
  }
}
</style>
