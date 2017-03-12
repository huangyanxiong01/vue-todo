<template>
  <div id="header">
        <input type="text" v-model="item" @keyup.enter="add_Todo" placeholder="What needs to be done?"/>
        <input type="text" v-model="keyword" @keyup="search"  placeholder="Todo Filter" />
  </div>

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
    methods:{
      add_Todo(e){
      	let item = this.item.toString().trim();
      	if (item) this.$store.commit('add_Todo', item);
      	this.item = '';
        e.preventDefault();
      },
      search(e){
      	console.info('Header component',this.keyword);
        return this.$store.commit('search',this.keyword);
      }
    },
  }
</script>

<style scoped>
  #header input{
    box-sizing: border-box;
    padding: 16px;
    font-size: 24px;
    width: 100%;
    line-height: 1.4em;
    border: none;
    background: rgba(0, 0, 0, 0.003);
    box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
  }

  #header input:focus{
    outline: none;
    border: none;

  }

</style>
