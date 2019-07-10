<template>
<div class="container" id="ProbabilityTable">
   <div id="v-for-object">
     <table>
      <template v-for="(data, key) in table(html)">
        <thead v-if="key === 'header'">
        // render table header
        </thead>
        <tbody v-if="key === 'body'">          
        // render body header
        </tbody>
      </template>
      </table>
      </div>
    </div>
</template>


 <script>
 export default {
     data(){
         return {
      data: data.data
    }
     const data = {
  "data": [
    [
      {
        "account_id": "11",
        "account_name": "name11"
      },
      {
        "account_id": "12",
        "account_name": "name12"
      },
      {
        "account_id": "13",
        "account_name": "name13"
      },
      {
        "account_id": "14",
        "account_name": "name14"
      }
    ],
    [
      {
        "account_id": "21",
        "account_name": "name21"
      },
      {
        "account_id": "22",
        "account_name": "name22"
      },
      {
        "account_id": "23",
        "account_name": "name23"
      }
    ],
    [
      {
        "account_id": "31",
        "account_name": "name31"
      },
      {
        "account_id": "32",
        "account_name": "name32"
      },
      {
        "account_id": "33",
        "account_name": "name33"
      }
    ]
  ]
  }
     },
  computed: {
    firstAccountNames() {
      return this.data.map(dataSet => dataSet[0].account_name)
    }
     }
 }
 </script>
 