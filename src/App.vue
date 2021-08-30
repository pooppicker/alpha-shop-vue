<template>
  <div id="app">
    <div id="alpha-shop">
      <Navbar />
    </div>
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  components: {
    Navbar,
  },
};
</script>

<style>
#app {
  height: 100%;
  width: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.nav {
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.nav__menu,
.nav__brand,
.nav__icons {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.nav__menu {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.nav__menu a {
  text-decoration: none;
  color: #2a2a2a;
}
.nav__menu li {
  text-decoration: none;
  list-style: none;
  display: inline-block;
  padding: 0 10px;
}
.nav__brand {
  position: absolute;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
}
.nav__brand .ac-logo {
  width: 10rem;
}
.nav__icons .icon {
  margin: 0 1.4rem;
  width: 1.4rem;
}
</style>
