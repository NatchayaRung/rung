<template>
  <div>
    <h2>Show status :</h2>Id:
    <input type="text" size="50" />
    <br />
    <br />
    <button type="submit" @click=" ReloadData()" class="btn btn-primary">reload</button>
    <br />
    <br />
    
  </div>
</template>

<script>
export default {
  props: {
    result: { type: String }
  },
  methods: {
    ReloadData(value) {
      aob = it.result;
    }
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