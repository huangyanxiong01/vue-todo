// @flow
import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex);

export default  new Vuex.Store({
  plugins: [createLogger()],
  //初始化的状态
  state:{
    items:[]
  },
  //用于定义从state中派生出一些状态
  getters:{
    doneTodosCount(state){
      return state.items;
    }
  },
  actions:{
    //异步逻辑都应该封装到这里里。

  },
  mutations:{
    //提交 mutation 是更改状态的唯一方法，并且这个过程是同步的
    addTodo(state,item){
      state.items.push({content:item});
    }
  }
})
