<template>
  <div class="alpha-shop">
    <NavTabs />
    <!-- Steppers -->
    <div class="col-md-6">
      <Steppers />
    </div>
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs.vue";
import Steppers from "./../components/Steppers.vue";

export default {
  components: {
    NavTabs,
    Steppers,
  },
};
</script>

<style>
.alpha-shop {
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px auto;
  position: relative;
  outline: 1px solid black;
}
</style>
