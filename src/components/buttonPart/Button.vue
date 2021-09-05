<template>
  <button @click="onClick()" :class="{ button: true }">
    <slot name="left" />
    <slot />
    <slot name="right" />
  </button>
</template>

<script>
export default {
  props: {
    onClick: {
      type: Function,
      required: true,
    },
  },
};
</script>
