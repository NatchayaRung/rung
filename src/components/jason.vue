<template>
  <form-schema :schema="schema" v-model="model" @submit="submit">
    <button type="submit">Subscribe</button>
  </form-schema>
</template>

<script>
//   import FormSchema from 'vue-json-schema'
//   import schema from './schema/newsletter-subscription.json'

//   export default {
//     data: () => ({
//       schema: schema,
//       model: {}
//     }),
//     methods: {
//       submit (e) {
//         // this.model contains the valid data according your JSON Schema.
//         // You can submit your model to the server here
//       }
//     },
//     components: { FormSchema }
//   }
// </script>
// HTML
// Async Schema
// To asynchronously load a schema, just set a promise that returns it.

// <script>
//   import axios from 'axios'
//   import FormSchema from 'vue-json-schema'

//   export default {
//     data: () => ({
//       schema: axios.get('/api/schema/subscription.json'),
//     }),
//     components: { FormSchema }
//   }
// </script>