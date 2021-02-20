<template>
  <div>
    <button @click="$emit('close-modal')">Close me</button>
    <slot />
  </div>
</template>
