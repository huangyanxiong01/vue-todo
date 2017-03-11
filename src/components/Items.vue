<template>
  <div>
    <ul>
      <li v-for="item in items">{{item.content}}</li>
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
     ...mapState([
        // 映射 this.items 为 store.state.items
        'items'
      ])
    }
  }
</script>
