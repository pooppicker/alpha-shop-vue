<template>
  <div id="stepper" class="main__stepper">
    <div class="container stepper-container">
      <div class="step active">
        <sapn class="step-circle">1</sapn>
        <span class="step-laebl">寄送地址</span>
        <span class="step-line"></span>
      </div>
      <div class="step">
        <span class="step-circle">2</span>
        <span class="step-laebl">運送方式</span>
        <span class="step-line"></span>
      </div>
      <div class="step">
        <span class="step-circle">3</span>
        <span class="step-laebl">付款資訊</span>
      </div>
    </div>
  </div>
</template>

<style>
#stepper {
  flex-basis: 50%;
  position: relative;
}
.container {
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  padding-left: 0;
  box-sizing: border-box;
}
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
  margin-right: 0.5rem;
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
  margin: 0 0.5rem;
}
</style>
