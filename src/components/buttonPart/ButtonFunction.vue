<template>
  <div id="btn-control" class="main__button">
    <Button
      :class="[step <= 1 ? 'hide-btn' : 'show-btn']"
      class="btn main__button__previous"
      :onClick="handlePrevious"
    >
      上一步
    </Button>
    <Button
      class="btn main__button__final"
      v-show="finalStep"
      :onClick="handleFinal"
    >
      確認下單
    </Button>
    <Button
      class="btn main__button__next"
      v-if="step < 3"
      :onClick="handleNext"
    >
      下一步
    </Button>
  </div>
</template>

<script>
import Button from "./../buttonPart/Button.vue";
export default {
  components: {
    Button,
  },
  props: {
    step: {
      type: Number,
      required: true,
    },
  },
  methods: {
    handlePrevious() {
      if (this.step > 1) {
        this.$router.push(`${this.step - 1}`);
      }
    },
    handleNext() {
      if (this.step < 3) {
        this.$router.push(`${this.step + 1}`);
      }
    },
    handleFinal() {
      alert("Are you sure to checkout?");
    },
  },
  computed: {
    finalStep() {
      return this.step === 3;
    },
  },
};
</script>

<style>
.main__button {
  position: absolute;
  top: 67%;
  margin-top: 2rem;
  width: 55%;
  border-top: 1px solid #f0f0f5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;
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
  z-index: 99;
}
.main__button__next::after {
  content: "\2192";
  padding-left: 0.2rem;
}

.main__button__previous {
  -webkit-appearance: none;
  border: none;
  background: white;
}

.main__button__previous::before {
  content: "←";
  margin-right: 1rem;
}

.main__button__final {
  border: none;
  border-radius: 5px;
  height: 2.5rem;
  padding: 0 3.2rem;
  background-color: #f67599;
  color: #ffffff;
  z-index: 99;
}
.hide-btn {
  visibility: hidden;
}
.show-btn {
  visibility: visible;
}
</style>
