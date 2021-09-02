<template>
  <div id="form" class="main__form">
    <div class="form-container">
      <!-- form-panel -->
      <form action="" id="form-panel" class="form-panel">
        <!-- part 1 -->
        <CheckOutInformation v-if="firstStep" />
        <!-- part 2 -->
        <CheckOutDelivery v-else-if="nextStep" />
        <!-- part 3 -->
        <CheckOutPayment v-else />
      </form>
    </div>
  </div>
</template>

<script>
import CheckOutInformation from "./../components/steps/CheckOutInformation.vue";
import CheckOutDelivery from "./../components/steps/CheckOutDelivery.vue";
import CheckOutPayment from "./../components/steps/CheckOutPayment.vue";

export default {
  props: {
    step: {
      type: Number,
      default: 1,
    },
  },
  components: {
    CheckOutInformation,
    CheckOutDelivery,
    CheckOutPayment,
  },
  computed: {
    firstStep() {
      return this.step === 1;
    },
    nextStep() {
      return this.step === 2;
    },
  },
};
</script>

<style>
.main__form {
  padding: 32px 0;
  min-height: 500px;
  width: 54%;
}
.main__form .form-container {
  height: 100%;
}
.main__form .form-container form {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: space-between;
}
</style>
