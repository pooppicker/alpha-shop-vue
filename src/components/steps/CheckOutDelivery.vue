<template>
  <div class="part d-none">
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
