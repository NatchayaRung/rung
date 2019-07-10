<template>
  <div>
    <h2>Database :</h2>
    <div class="center">
      <b-table striped hover :items="items" :fields="fields" style="width:100%"></b-table>
    </div>
    <br />
    <br />
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: ["Id", "Catagory", "Detail", "Date-Time"],
      items: [
        {
          isActive: true,
          age: 40,
          first_name: "Dickerson",
          last_name: "Macdonald"
        },
        { isActive: false, age: 21, first_name: "Larsen", last_name: "Shaw" },
        { isActive: false, age: 89, first_name: "Geneva", last_name: "Wilson" },
        { isActive: true, age: 38, first_name: "Jami", last_name: "Carney" }
      ]
    };
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
