<template>
  <div class="part1">
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
</template>

<script>
export default {
  props: {
    salutation: String,
    username: String,
    phone: String,
    email: String,
    city: String,
    addr: String,
  },
  methods: {
    handleChange(obj) {
      this.$emit("formSwitch", obj);
    },
  },
};
</script>

<style>
.form__title {
  margin-bottom: 1rem;
  display: flex;
}
.form-row {
  margin-bottom: 24px;
  display: flex;
}
.title-wrapper,
.city-wrapper {
  position: relative;
  z-index: 0;
}
.title-wrapper::after,
.city-wrapper::after {
  content: "";
  border-style: solid;
  border-width: 6px 5px 0 5px;
  border-color: #2a2a2a transparent transparent transparent;
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
}
.city-wrapper select {
  width: 160px;
}
select {
  -webkit-appearance: none;
  border: 1px solid #2a2a2a;
  border-radius: 5px;
  font-size: 13px;
  padding: 0.5rem;
  width: 160px;
}
label {
  display: block;
  margin-bottom: 6px;
  font-size: 14px;
  text-align: left;
  font-weight: bold;
  color: #808080;
}
.part1 input {
  border: 1px solid #2a2a2a;
  border-radius: 5px;
  font-size: 13px;
  padding: 0.5rem;
}
.form-full-name input,
.form-address input {
  width: 440px;
}
.form-phone input {
  width: 420px;
}
.form-email input {
  width: 160px;
}
</style>
