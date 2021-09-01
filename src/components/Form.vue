<template>
  <div id="form" class="main__form">
    <div class="form-container">
      <!-- form-panel -->
      <form action="" id="form-panel" class="form-panel">
        <!-- part 1 -->
        <CheckOutInformation />
        <!-- part 2 -->
        <CheckOutDelivery />
        <!-- part 3 -->
        <CheckOutPayment />
      </form>
    </div>
  </div>
</template>

<script>
import CheckOutInformation from "./../components/steps/CheckOutInformation.vue";
import CheckOutDelivery from "./../components/steps/CheckOutDelivery.vue";
import CheckOutPayment from "./../components/steps/CheckOutPayment.vue";

export default {
  components: {
    CheckOutInformation,
    CheckOutDelivery,
    CheckOutPayment,
  },
};
</script>

<style>
.main__form {
  padding: 32px 0;
  min-height: 500px;
  width: 55%;
  outline: 1px solid black;
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
.main form .form-row .main__form__payment {
  width: 100%;
}
.main form .form-row .main__form__payment .card-name,
.main form .form-row .main__form__payment .card-number {
  margin-bottom: 1rem;
}
.main form .form-row .main__form__payment .card-name input,
.main form .form-row .main__form__payment .card-number input {
  width: 60%;
}
.main form .form-row .main__form__payment .card-verify {
  display: flex;
}
.main form .form-row .main__form__payment .card-verify .cvc {
  margin-left: 1rem;
}
.main form .form-row .main__form__payment .card-verify .cvc,
.main form .form-row .main__form__payment .card-verify .valid-date {
  flex-grow: 1;
}
.main form .form-row .main__form__payment .card-verify .cvc input,
.main form .form-row .main__form__payment .card-verify .valid-date input {
  width: 100%;
}
</style>
