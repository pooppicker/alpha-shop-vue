<template>
  <div class="alpha-shop">
    <NavTabs />
    <!-- Steppers -->
    <div class="row">
      <div class="col-md-6 left">
        <h1 class="title">結帳</h1>
        <Steppers :currentStep="step" />
        <Form :step="step" />
        <ButtonFunction :step="step" :handleSubmit="handleSubmit" />
      </div>
    </div>
    <!-- form panel -->
    <div class="row right">
      <div class="col-md-6">
        <Cart />
      </div>
    </div>
  </div>
</template>

<script>
import Steppers from "../components/stepper/Steppers.vue";
import ButtonFunction from "./../components/buttonPart/ButtonFunction.vue";
import Form from "./../components/Form.vue";
import Cart from "./../components/cart/Cart.vue";

const dummyData = {
  salutation: "Mr",
  username: "",
  phone: "",
  email: "",
  city: "",
  addr: "",
  shippingFee: 0,
  ccname: "",
  cardnumber: "",
  expdate: "",
  cvv: "",
  totalPrice: 0,
};

export default {
  components: {
    Steppers,
    ButtonFunction,
    Form,
    Cart,
  },
  data() {
    return {
      form: dummyData,
    };
  },
  methods: {
    handleSubmit() {
      this.form = dummyData;
    },
  },
  computed: {
    step() {
      return +this.$route.path.split("/")[1];
    },
  },
};
</script>

<style>
.alpha-shop {
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin: 20px 15%;
  position: relative;
  /* outline: 1px solid black; */
}
.left {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
</style>
