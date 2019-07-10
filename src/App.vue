<template>
  <div id="app">
    <div class="row">
    <div class="col-xs-12">
      <app-home></app-home>
    </div>

  </div>
  </div>
</template>

<script>
import home from "./components/home.vue";
export default {
  name: "App",
  components: {
    "app-home": home
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  /* background-color: bisque; */
}
div.component {
  border: 1px solid black;
  padding: 30px;
  margin: auto;
}
</style>
