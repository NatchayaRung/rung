<template>
  <div>
    <h2>Mongo table :</h2>

    <div>
      <b-table :items="items" :busy="isBusy" class="mt-3" outlined>
        <div slot="table-busy" class="text-center text-danger my-2">
          <b-spinner class="align-middle"></b-spinner>
          <strong>Loading...</strong>
        </div>
      </b-table>
    </div>
    <b-button @click="toggleBusy">Toggle Busy State</b-button>
    <br />
    <br />
    <!-- <table style="width:100%">
 
    <thead>
      <tr>
        <th scope="col" style="text-align:center"><h3>Id</h3></th>
        <th scope="col" style="text-align:center"><h3>Payload</h3></th>
        <th scope="col" style="text-align:center"><h3>Timestamp</h3></th>
        <th scope="col" style="text-align:center"><h3>Imei</h3></th> 
      </tr>
    </thead>
    <tbody *ngFor="let itemmongo of mongo">
      <tr>
        <td scope="row">{{itemmongo.id}}</td>
        <td>{{itemmongo.payload}}</td>
        <td>{{itemmongo.timestamp}}</td>
        <td>{{itemmongo.imei}}</td>
        
      </tr>
    </tbody>
    </table>-->
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
      items: [
        { Id: "", Payload: "", Timestamp: "", Imei: "" },
        { Id: "", Payload: "", Timestamp: "", Imei: "" },
        { Id: "", Payload: "", Timestampe: "", Imei: "" },
        { Id: "", Payload: "", Timestamp: "", Imei: "" }
      ]
    };
  },
  methods: {
    toggleBusy() {
      this.isBusy = !this.isBusy;
    }
  }
};
// methods:{
//      this.Http.get<mongo[]>('https://tmsapi1.azurewebsites.net/api/MornitorSystem/GetLastMongoData')
//   .subscribe(it => {
//     console.log(it)
//     this.mongo = it;
// }
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