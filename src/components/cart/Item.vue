<template>
  <div class="cart-item">
    <img :src="img" alt="" />
    <div class="cart-content">
      <div class="cart-info">
        <h6 class="item-title">{{ title }}</h6>
      </div>
      <div class="cart-qty">
        <div class="cart-button remove" @click="handleDecrease">-</div>
        <div class="item-qty number">{{ amount }}</div>
        <div class="cart-button add" @click="handleIncrease">+</div>
      </div>
      <span class="price">${{ price }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      reruired: true,
    },
    index: {
      type: Number,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    addItem: {
      type: Function,
      required: true,
    },
    removeItem: {
      type: Function,
      required: true,
    },
  },
  computed: {
    handleIncrease() {
      return this.addItem(this.index);
    },
    handleDecrease() {
      return this.removeItem(this.index);
    },
  },
};
</script>

<style>
.price {
  margin-top: 1rem;
}
</style>
