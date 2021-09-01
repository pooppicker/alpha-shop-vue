<template>
  <div id="btn-control" class="main__button">
    <Button
      class="btn main__button__previous"
      disabled="disabled"
      :onClick="handlePrevious"
    >
      上一步
    </Button>
    <Button
      class="btn main__button__next"
      :onClick="finalStep ? handleSubmit : handleNext"
    >
      <template v-if="finalStep">確認下單</template>
      <template v-else>下一步</template>
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
    handleSumit: {
      type: Function,
      required: true,
    },
    step: {
      type: Number,
      required: true,
    },
  },
  methods: {
    handlePrevious() {
      if (this.step > 1) {
        this.$route.push(`${this.step - 1}`);
      }
    },
    handleNext() {
      if (this.step < 3) {
        this.$route.push(`${this.step + 1}`);
      }
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
  top: 100%;
  margin-top: 2rem;
  width: 55%;
  border-top: 1px solid #f0f0f5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;
}
</style>
