<template>
  <div class="part d-none">
    <h2 class="form__title">付款資訊</h2>
    <div class="form-row">
      <div class="main__form__payment">
        <div class="card-name">
          <label>持卡人姓名</label>
          <input
            type="text"
            name="card-name"
            id="card-name"
            placeholder="請輸入姓名"
          />
        </div>
        <div class="card-number">
          <label>卡號</label>
          <input
            type="text"
            name="number"
            id="number"
            placeholder="0000 0000 0000 0000"
          />
        </div>
        <div class="card-verify">
          <div class="valid-date">
            <label>有效期限</label>
            <input type="text" name="date" id="date" placeholder="MM/YY" />
          </div>
          <div class="cvc">
            <label>CVC / CCV</label>
            <input type="text" name="cvc" id="cvc" placeholder="123" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
