<template>
  <div>
    <h2>Mqtt :</h2>

    
    <b-table :items="items">
      <span slot="html" slot-scope="data" v-html="data.value"></span>
    </b-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
       items: [
          {
            text: 'This is <i>escaped</i> content',
            html: 'This is <i>raw <strong>HTML</strong></i> <span style="color:red">content</span>'
          }
        ]
    };
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
