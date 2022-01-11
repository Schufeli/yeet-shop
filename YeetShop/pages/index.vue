<template>
  <products></products>
</template>

<script lang="ts">
import Vue from 'vue'
import products from '~/components/products.vue'

export default Vue.extend({
  components: { products },
  name: 'IndexPage'
})
</script>
