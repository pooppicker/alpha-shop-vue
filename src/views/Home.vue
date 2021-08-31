<template>
  <div class="alpha-shop">
    <NavTabs />
    <!-- Steppers -->
    <div class="col-md-6">
      <Steppers />
    </div>
    <div id="form" class="main__form">
      <div class="form-container">
        <!-- Form Panel -->
        <AlphaShopForm />
      </div>
    </div>
    <div id="btn-control" class="main__button">
      <button class="btn main__button__previous" disabled="disabled">
        上一步
      </button>
      <button class="btn main__button__next">下一步</button>
    </div>
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs.vue";
import Steppers from "./../components/Steppers.vue";
import AlphaShopForm from "./../components/AlphaShopForm.vue";

export default {
  components: {
    NavTabs,
    Steppers,
    AlphaShopForm,
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
  outline: 1px solid black;
}
.main__button {
  position: absolute;
  top: 100%;
  margin-top: 2rem;
  width: 55%;
  border-top: 1px solid #f0f0f5;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.main__button .btn {
  font-size: 14px;
  cursor: pointer;
}
.main__button__next {
  border: none;
  border-radius: 5px;
  height: 2.5rem;
  padding: 0 3rem;
  background-color: #f67599;
  color: #ffffff;
}
.main__button__next::after {
  content: "→";
  margin-left: 1rem;
}
.main__button__previous {
  -webkit-appearance: none;
  border: none;
  background: white;
}
/* .main__button__previous[disabled] {
  visibility: hidden;
} */
.main__button__previous::before {
  content: "←";
  margin-right: 1rem;
}
</style>
