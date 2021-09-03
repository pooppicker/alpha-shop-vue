<template>
  <div class="delivery-total">
    <span>{{ title }}</span>
    <span class="total">{{ price }}</span>
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
