<template>
  <button @click="onClick()" :class="{ button: true }">
    <slot name="left" />
    <slot />
    <slot name="right" />
  </button>
</template>

<script>
export default {
  props: {
    onClick: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style>
.main__button .btn {
  font-size: 14px;
  cursor: pointer;
}
.main__button__next {
  border: none;
  border-radius: 5px;
  height: 2.5rem;
  padding: 0 3rem;
  background-color: #f67599;
  color: #ffffff;
  z-index: 99;
}
.main__button__next::after {
  content: "→";
  margin-left: 1rem;
}
.main__button__previous {
  -webkit-appearance: none;
  border: none;
  background: white;
}
.main__button__previous[disabled] {
  visibility: hidden;
}
.main__button__previous::before {
  content: "←";
  margin-right: 1rem;
}
</style>
