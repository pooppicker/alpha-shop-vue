<template>
  <input
    name="d-type"
    type="radio"
    value="normal"
    id="normal"
    :checked="checked"
    @change="$emit('change', price)"
  />
</template>

<script>
import getPrice from "../../utils/mixins";

export default {
  props: {
    checked: {
      type: Boolean,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  computed: {
    getShippingPrice() {
      return getPrice(this.price);
    },
  },
};
</script>
