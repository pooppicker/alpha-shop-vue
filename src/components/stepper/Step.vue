<template>
  <div :class="{ step: true, inactive }">
    <div v-if="checked" class="step-circle checked"></div>
    <span :class="{ inactive }" v-else class="step-circle">{{ index }}</span>
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

.step-circle.checked::after {
  content: "✓";
  position: absolute;
  background-color: #2a2a2a;
  width: 2rem;
  height: 2rem;
  text-align: center;
  line-height: 1.3;
  border-radius: 50%;
  color: #fff;
  font-weight: bold;
  font-size: 25px;
}
.step.inactive {
  color: #afb1bd;
}
.step .step-circle.inactive {
  background-color: #fff;
  border: 1px solid black;
  color: #000;
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
  background-color: #2a2a2a;
  color: #fff;
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
