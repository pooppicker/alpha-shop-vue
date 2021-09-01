<template>
  <div :class="{ step: true, inactive }">
    <div v-if="checked" class="step checked"></div>
    <sapn v-else class="step-circle">{{ index }}</sapn>
    <span class="step-laebl">{{ title }}</span>
    <span class="step-line"></span>
  </div>
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    checked: {
      type: Boolean,
      required: true,
    },
    inactive: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style>
.container .step {
  flex-grow: 1;
  box-sizing: border-box;
  display: flex;
  align-items: center;
}

.container .step.checked .step-circle::after {
  content: "✓";
  position: absolute;
  background-color: #2a2a2a;
  width: 1.9rem;
  height: 1.9rem;
  text-align: center;
  line-height: 1;
  border-radius: 50%;
  color: #fff;
  font-weight: bold;
  font-size: 28px;
}
.container .step.active .step-circle {
  background-color: #2a2a2a;
  color: #fff;
  border: 2px solid #2c53a0;
}
.container .step-laebl {
  display: inline-block;
}
.container .step-circle {
  margin-right: 1rem;
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #2a2a2a;
  border-radius: 50%;
}
.container .step-line {
  background-color: #2a2a2a;
  flex-grow: 1;
  height: 2px;
  width: 60px;
  margin: 0 2rem;
}
.container .step:last-child .step-line {
  display: none;
}
</style>
