<template>
  <div>
    <h2>Database :</h2>
    
      <b-table striped hover :items= "items" :fields="fields" style="width:100%" ></b-table>
      <ul v-for = "item in items">
        {{item.id}}
        {{item.catagory}}
         {{item.detail}}
          {{item.logDate}}
      </ul>
    <button type="submit" @click=" getData()" class="btn btn-primary">reload</button>
   
    <br />
    <br />
  </div>
</template>

<script>
const API_URL =
  "https://tmsapi1.azurewebsites.net/api/MornitorSystem/GetTranferDataLogs";
export default {
  data() {
    return {
      // fields: ["Id", "Catagory", "Detail", "Date-Time"],
      items: [
        {
          Id: "",
          Catagory: "",
          Detail: "",
         logDate: ""
        }
      ]
    };
  },
  methods: {
    getData() {
      this.$http
        .get(
          "https://tmsapi1.azurewebsites.net/api/MornitorSystem/GetTranferDataLogs"
        )
        .then(
          response => {
            console.log(response.json());

            this.items = response.body;
          },
          () => {
            this.items = response.json();
          }
        );
    }
  }
};
</script>
<style scoped>
div {
  border: 1px solid lightblue;
  box-shadow: 1px 1px 2px gray;
  background-color: wheat;
}

h2 {
  text-align: left;
  padding: 30px;
  margin: auto;
}
table {
  text-align: center;
}
</style>
