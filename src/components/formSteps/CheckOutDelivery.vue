<template>
  <div class="part2">
    <h2 class="form__title">運送方式</h2>
    <div class="form-row">
      <div class="main__form__delivery">
        <div class="deliver normal">
          <input
            name="d-type"
            type="radio"
            value="normal"
            id="normal"
            checked
          /><label for="normal">
            <span class="deliver-title">標準運送</span>
            <span class="deliver-description">約3-7個工作天</span>
          </label>
          <span class="deliver-price">免費</span>
        </div>
        <div class="deliver dhl">
          <input name="d-type" type="radio" value="dhl" id="dhl" /><label
            for="dhl"
          >
            <span class="deliver-title">DHL貨運</span>
            <span class="deliver-description">48小時內送達</span>
          </label>
          <span class="deliver-price">$500</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.main__form__delivery input[type="radio"] {
  margin-right: 1rem;
  -webkit-appearance: none;
  border-radius: 50%;
}
.main__form__delivery input[type="radio"] ~ label {
  display: inline-flex;
  flex-direction: column;
  vertical-align: middle;
  margin: 0;
  font-size: 13px;
}
.main__form__delivery input[type="radio"]:checked {
  box-shadow: inset 0 0 0 5px #2a2a2a;
}
.main__form__delivery .deliver input[type="radio"]:checked::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  border: 1px solid #2a2a2a;
}

.main__form__delivery {
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;
}
.main__form__delivery .deliver {
  width: 600px;
  position: relative;
  flex-grow: 1;
  border: 1px solid #f0f0f5;
  margin-bottom: 1rem;
  padding: 0.7rem;
  border-radius: 5px;
}
.main__form__delivery .deliver .deliver-price {
  position: absolute;
  font-weight: bold;
  right: 1rem;
}
</style>
