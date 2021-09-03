<template>
  <sidebar id="cart" class="cart">
    <div class="cart-item">
      <img src="https://i.ibb.co/7tg68Wf/jeans1-3x.png" alt="" />
      <div class="cart-content">
        <div class="cart-info">
          <h6 class="item-title">破壞補丁修身牛仔褲</h6>
        </div>
        <div class="cart-qty">
          <div class="cart-button remove">-</div>
          <div class="item-qty number">1</div>
          <div class="cart-button add">+</div>
        </div>
        <span class="price">3999</span>
      </div>
    </div>
    <div class="cart-item">
      <img src="https://i.ibb.co/1d5MVvf/jeans2-3x.png" alt="" />
      <div class="cart-content">
        <div class="cart-info">
          <h6 class="item-title">破壞補丁修身牛仔褲</h6>
        </div>
        <div class="cart-qty">
          <div class="cart-button remove">-</div>
          <div class="item-qty number">1</div>
          <div class="cart-button add">+</div>
        </div>
        <span class="price">1299</span>
      </div>
    </div>
    <div class="delivery-fee">
      <span>運費</span>
      <span class="fee">免費</span>
    </div>
    <div class="delivery-total">
      <span>小計</span>
      <span class="total">$5798</span>
    </div>
  </sidebar>
</template>

<script>
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
  data() {
    return {
      items,
    };
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
</style>
