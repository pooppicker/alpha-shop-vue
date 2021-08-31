<template>
  <form action="" id="form-panel" class="form-panel">
    <!-- part 1 -->
    <div class="part">
      <h2 class="form__title">寄送地址</h2>
      <!-- name -->
      <div class="form-row name">
        <div class="form-name-title">
          <label for="form-name-title">稱謂</label>
          <div class="title-wrapper">
            <select name="title" id="title" required>
              <option value="mr">先生</option>
              <option value="ms">小姐</option>
            </select>
          </div>
        </div>
        <div class="form-full-name">
          <label for="form-full-name">姓名</label>
          <input type="text" name="name" id="name" placeholder="請輸入姓名" />
        </div>
      </div>
      <!-- phone&email -->
      <div class="form-row">
        <div class="form-phone">
          <label for="phone">電話</label>
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="請輸入行動電話"
          />
        </div>
        <div class="form-email">
          <label for="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="請輸入電子郵件"
          />
        </div>
      </div>
      <!-- address -->
      <div class="form-row">
        <div class="form-name-title">
          <label for="form-city">縣市</label>
          <div class="city-wrapper">
            <select name="city" id="city">
              <option value="" disabled selected>請選擇縣市</option>
              <option value="taipei">台北</option>
              <option value="taichung">台中</option>
              <option value="kaohsiung">高雄</option>
            </select>
          </div>
        </div>
        <div class="form-address">
          <label for="form-address">地址</label>
          <input
            type="text"
            name="address"
            id="address"
            placeholder="請輸入地址"
          />
        </div>
      </div>
    </div>
    <!-- part 2 -->
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
    <!-- part 3 -->
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
  </form>
</template>
