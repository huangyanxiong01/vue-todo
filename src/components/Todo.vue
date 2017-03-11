<template>
  <div>
    <Headers></Headers>
    <Items></Items>
  </div>
</template>

<script>
  import Headers from './Headers.vue'
  import Items from './Items.vue'
  export default{
  	name:'todo',
    components:{Headers,Items}
  }
</script>

<style scoped>

</style>
