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

.main form .form-row input[type="radio"] {
  margin-right: 1rem;
  -webkit-appearance: none;
  border-radius: 50%;
}
.main form .form-row input[type="radio"] ~ label {
  display: inline-flex;
  flex-direction: column;
  vertical-align: middle;
  margin: 0;
  font-size: 13px;
}
.main form .form-row input[type="radio"]:checked {
  box-shadow: inset 0 0 0 5px #2a2a2a;
}
.main form .form-row .deliver input[type="radio"]:checked::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  border: 1px solid #2a2a2a;
}

.main form .form-row .main__form__delivery {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.main form .form-row .main__form__delivery .deliver {
  position: relative;
  flex-grow: 1;
  border: 1px solid #f0f0f5;
  margin-bottom: 1rem;
  padding: 0.7rem;
  border-radius: 5px;
}
.main form .form-row .main__form__delivery .deliver .deliver-price {
  position: absolute;
  right: 1rem;
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
