<template>
  <div class="container">
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
.container {
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 20px auto;
  position: relative;
  outline: 1px solid black;
}
</style>
