<template>
  <div>
    <h2>Show status :</h2>Id:
    <input type="text " v-model="res.result" size="50" />

    <br />
    <!-- <li>
      <ul v-for="item in res1">
        {{item.id}}
        {{item.imei}}
      </ul>
    </li> -->
    <br />
    <button type="submit" @click=" getData()" class="btn btn-primary">reload</button>
    <br />
    <br />
    <hr />
  </div>
</template>


<script>
const API_URL =
  "https://tmsapi1.azurewebsites.net/api/MornitorSystem/CheckSystem";

export default {
  data: function() {
    return {
      res: Object,
      res1: []
    };
  },
  methods: {
    getData() {
      this.$http.get(API_URL).then(
        response => {
          console.log(response.json());

          this.res = response.body;
        },
        () => {
          this.res = response.json();
        }
      );
    },
    // getData1() {
    //   this.$http
    //     .get(
    //       "https://tmsapi1.azurewebsites.net/api/MornitorSystem/GetLastMongoData"
    //     )
    //     .then(
    //       response => {
    //         console.log(response.json());

    //         this.res1 = response.body;
    //       },
    //       () => {
    //         this.res1 = response.json();
    //       }
    //     );
    // }
  }
};
</script>

<style scoped>
div {
  border: 1px solid coral;
  box-shadow: 1px 1px 2px gray;
  background-color: wheat;
}

h2 {
  text-align: left;
  padding: 30px;
  margin: auto;
}

button {
  padding-right: auto;
}
</style>