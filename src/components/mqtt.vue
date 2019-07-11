<template>
  <div>
    <h2>Mqtt :</h2>
    <br />
    <h3>{{msg}}</h3>
    <br />
    <br />
    <button type="submit" @click="showData()"  class="btn btn-primary">run</button>
    <br />
    <br />
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: ""
    };
  },

  // mounted () {
  //   this.$mqtt.subscribe('meitrek/gw/rtl')
  // },

  mqtt: {
    "meitrek/gw/rtl"(data) {
      this.msg = this.msg + data;
    }
  },
  methods: {
    showData() {
      this.$mqtt.subscribe("meitrek/gw/rtl");
    }
  }
};
</script>

<style scoped>
div {
  border: 1px solid palevioletred;
  box-shadow: 1px 1px 2px gray;
  background-color: pink;
}

h2 {
  text-align: left;
  padding: 30px;
  margin: auto;
}
</style>
