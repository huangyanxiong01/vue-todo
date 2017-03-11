<template>
  <form>
    <div>
      <input type="text" v-model="item"/>
    </div>
  </form>
</template>

<script>
  import {mapMutations} from 'vuex'
  export default {
    name: 'headers',
    data:() => {
    	return {
    		item:'',
        keyword:''
      }
    },
    //相当于提交Mutation
    /*methods:{
      addTodo(){
        this.$store.commit('addTodo', this.item)
      }
    },*/
    methods: mapMutations([
      'addTodo','search'
    ]),
  }
</script>
