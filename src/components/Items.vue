<template>
  <div class="items">
    <ul>
      <li v-for="item in items"> <a  class="collection-item">{{item.content}}</a></li>
    </ul>
  </div>
</template>

<script>
  import {mapState,mapGetters} from 'vuex';

  export default {
    name: 'items',
    /**
     * 计算属性，当数据更新时触发组件更新
     */
    computed: {
     ...mapGetters([
        // 映射 this.items 为 store.state.items
        'items'
      ])
    }
  }
</script>

<style scoped>
  .items ul{
    display: inline;
  }
  .items ul li{
    list-style: none;
    border: 1px solid #e0e0e0;
    text-align: center;
  }

  .items > ul :not(:first-child) {
    border-top:none;
  }


  .items ul li a{
    padding: 16px;
    font-size: 24px;
    display: block;
    text-decoration: none;
    color: #000;
  }


  .items ul li a:hover{
    display: block;
    text-decoration: none;
    color: #000;
    background-color: #26a69a;
  }
</style>
