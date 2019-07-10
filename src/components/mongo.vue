<template>
  <div>
    <h2>Mongo table :</h2>

    <div>
      <b-table :items="mongo" :busy="isBusy" class="mt-3" outlined>
        <div slot="table-busy" class="text-center text-danger my-2">
          <b-spinner class="align-middle"></b-spinner>
          <ul v-for="item in mongo">
            {{item.id}}
            {{item.catagory}}
            {{item.detail}}
            {{item.logDate}}
          </ul>
          <strong>Loading...</strong>
        </div>
      </b-table>
    </div>
    <br />
    <br />
    <button type="submit" @click=" getData()" class="btn btn-primary">reload</button>
    <br />
    <br />
    <b-button @click="toggleBusy"> Busy State</b-button>
    <br />
    <br />
  </div>
</template>

<script>
export default {
  props: {
    id: { type: String },
    payload: { type: String },
    timestamp: { type: Date },
    imei: { type: String }
  },
  data() {
    return {
      isBusy: false,
      mongo: [
        { Id: "", Payload: "", Timestamp: "", Imei: "" },
        { Id: "", Payload: "", Timestamp: "", Imei: "" },
        { Id: "", Payload: "", Timestamp: "", Imei: "" },
        { Id: "", Payload: "", Timestamp: "", Imei: "" }
      ]
    };
  },
  methods: {
    toggleBusy() {
      this.isBusy = !this.isBusy;
    },
    getData() {
      this.$http
        .get(
          "https://tmsapi1.azurewebsites.net/api/MornitorSystem/GetLastMongoData"
        )
        .then(
          response => {
            console.log(response.json());
            this.mongo = response.body;
          },
          () => {
            this.mongo = response.json();
          }
        );
    }
  }
};
</script>

<style scoped >
table {
  border-collapse: collapse;
  width: 100%;
}

div {
  border: 1px solid cadetblue;
  background-color: #add8e6;
  box-shadow: 1px 1px 2px gray;
}

h2 {
  text-align: left;
  padding: 30px;
  margin: auto;
}
button {
  right: 0px;
}
table {
  text-align: center;
  padding: 8px;
}
</style>