<template>
  <div id="cart" class="cart">
    <Item
      v-for="(item, index) in items"
      :key="index"
      :index="index"
      v-bind="item"
      :addItem="increaseAmount"
      :removeItem="decreaseAmount"
    />
    <DeliveryFee title="運費" :price="getShippingFee" />
    <Total title="小計" :price="getTotalPrice" />
  </div>
</template>

<script>
import Item from "./../cart/Item.vue";
import getPrice from "../../utils/mixins";
import DeliveryFee from "./../cart/DeliveryFee.vue";
import Total from "./../cart/Total.vue";

const items = [
  {
    img: "https://i.ibb.co/7tg68Wf/jeans1-3x.png",
    title: "破壞補丁修身牛仔褲",
    amount: 1,
    price: 3999,
  },
  {
    img: "https://i.ibb.co/1d5MVvf/jeans2-3x.png",
    title: "刷色直筒牛仔褲",
    amount: 1,
    price: 1299,
  },
];
export default {
  components: {
    Item,
    DeliveryFee,
    Total,
  },
  props: {
    shippingFee: {
      type: Number,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    onChange: {
      type: Function,
    },
  },
  data() {
    return {
      items,
    };
  },
  methods: {
    increaseAmount(index) {
      return () => {
        this.items[index].amount++;
      };
    },
    decreaseAmount(index) {
      return () => {
        if (this.items[index].amount > 1) this.items[index].amount--;
      };
    },
  },
  computed: {
    getShippingFee() {
      return getPrice(this.shippingFee);
    },
    getTotalPrice() {
      let total = 0;
      this.items.forEach((item) => {
        total += item.price * item.amount;
      });
      total += this.shippingFee;
      this.$emit("change", total);
      return getPrice(total);
    },
  },
};
</script>

<style>
.cart {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: space-between;
  justify-content: flex-start;
  padding: 1rem;
  top: 5.5em;
  border: 1px solid #f0f0f5;
  border-radius: 5px;
  /* outline: 1px solid black; */
}
.cart .cart-item,
.cart .delivery-fee,
.cart .delivery-total,
.cart .cart-item img,
.cart .cart-content {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  /* outline: 1px solid black; */
}
.cart .cart-item img,
.cart .delivery-fee img,
.cart .delivery-total img {
  width: 100px;
  height: 100px;
}
.cart .cart-item .cart-content,
.cart .delivery-fee .cart-content,
.cart .delivery-total .cart-content {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex: 1;
}
.cart .cart-item .cart-content .item-title,
.cart .delivery-fee .cart-content .item-title,
.cart .delivery-total .cart-content .item-title {
  font-weight: normal;
  font-size: 15px;
}
.cart .cart-item .cart-content .cart-qty,
.cart .delivery-fee .cart-content .cart-qty,
.cart .delivery-total .cart-content .cart-qty {
  display: flex;
  align-items: center;
  font-size: 14px;
  text-align: center;
}
.cart .cart-item .cart-content .cart-qty .number,
.cart .cart-item .cart-content .cart-qty .add,
.cart .delivery-fee .cart-content .cart-qty .number,
.cart .delivery-fee .cart-content .cart-qty .add,
.cart .delivery-total .cart-content .cart-qty .number,
.cart .delivery-total .cart-content .cart-qty .add {
  margin-left: 2rem;
}
.cart .cart-item .cart-content .cart-qty .cart-button,
.cart .delivery-fee .cart-content .cart-qty .cart-button,
.cart .delivery-total .cart-content .cart-qty .cart-button {
  padding: 0 10px;
  line-height: 1.5;
  font-size: 20px;
  font-weight: bold;
  border-radius: 50%;
  background-color: #f0f0f5;
  cursor: pointer;
}
.cart .delivery-fee,
.cart .delivery-total {
  border-top: 1px solid #f0f0f5;
  display: flex;
  justify-content: space-between;
  padding-top: 0.5rem;
}
.cart .delivery-fee {
  font-weight: bold;
}
</style>
