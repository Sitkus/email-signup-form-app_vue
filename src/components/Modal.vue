<template>
  <div>
    <button @click="onClose" />
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    onClose: {
      type: Function
    }
  }
};
</script>
