<template>
  <div class="part3">
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

<style scoped>
.part3 input {
  border: 1px solid #2a2a2a;
  border-radius: 5px;
  font-size: 13px;
  padding: 0.5rem;
}
label {
  display: block;
  margin-bottom: 6px;
  font-size: 14px;
  text-align: left;
  font-weight: bold;
  color: #808080;
}
.main__form__payment {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.main__form__payment .card-name,
.main__form__payment .card-number {
  margin-bottom: 1rem;
}
.main__form__payment .card-name input,
.main__form__payment .card-number input {
  width: 350px;
}
.card-verify {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
}
.main__form__payment .card-verify .valid-date {
  margin-right: 1rem;
}

.main__form__payment .card-verify .valid-date {
  margin-left: 85%;
}
.main__form__payment .card-verify .cvc input,
.main__form__payment .card-verify .valid-date input {
  width: 285px;
}
</style>
