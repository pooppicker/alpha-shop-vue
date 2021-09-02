<template>
  <div id="stepper" class="main__stepper">
    <div class="container stepper-container">
      <Step
        v-for="(stepTitle, index) in stepTitles"
        :key="stepTitle"
        :index="index + 1"
        :title="stepTitle"
        :inactive="index + 1 > currentStep"
        :checked="index + 1 < currentStep"
      />
    </div>
  </div>
</template>

<script>
import Step from "./../stepper/Step.vue";

export default {
  components: {
    Step,
  },
  props: {
    currentStep: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      stepTitles: ["寄送地址", "運送方式", "付款資訊"],
    };
  },
};
</script>

<style>
#stepper {
  /* flex-basis: 50%; */
  position: relative;
}
.container {
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  padding-left: 0;
  box-sizing: border-box;
}
</style>
