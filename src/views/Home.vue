<template>
  <div class="alpha-shop">
    <NavTabs />
    <!-- Steppers -->
    <div class="col-md-6">
      <Steppers :currentStep="step" />
    </div>
    <!-- form panel -->
    <Form :step="step" />
    <ButtonFunction :step="step" :handleSubmit="handleSubmit" />
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs.vue";
import Steppers from "../components/stepper/Steppers.vue";
import ButtonFunction from "./../components/buttonPart/ButtonFunction.vue";
import Form from "./../components/Form.vue";

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
    NavTabs,
    Steppers,
    ButtonFunction,
    Form,
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
  flex-direction: column;
  align-items: flex-start;
  margin: 20px auto;
  position: relative;
  /* outline: 1px solid black; */
}
</style>
