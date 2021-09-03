<template>
  <div class="delivery-fee">
    <span>{{ title }}</span>
    <span class="fee">{{ price }}</span>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
  },
};
</script>
