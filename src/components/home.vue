<template>
  <div class="component">
    <app-header></app-header>
    <hr />
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <app-show></app-show>
      </div>
    </div>
    <br />
    <br />
    <b-container class="bv-example-row bv-example-row-flex-cols">
      <div class="row">
        <div>
          <b-col align-self="center">
            <app-mongo></app-mongo>
          </b-col>
          <!-- <P>{{msg}}</P> -->
        </div>
      </div>
    </b-container>
    <br />
    <br />
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <app-database></app-database>
      </div>
      <div class="col-xs-12 col-sm-6">
        <app-mqtt></app-mqtt>
      </div>
    </div>
    <hr />

    <app-footer></app-footer>
  </div>
</template>

<script>
import mongo from "./mongo.vue";
import show from "./show.vue";
import header from "./header.vue";
import footer from "./footer.vue";
import database from "./database.vue";
import mqtt from "./mqtt.vue";

export default {
  components: {
    "app-header": header,
    "app-mongo": mongo,
    "app-show": show,
    "app-database": database,
    "app-mqtt": mqtt,
    "app-footer": footer
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  background-color: whitesmoke;
}

/* h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
</style>
