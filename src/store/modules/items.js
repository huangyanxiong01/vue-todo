// @flow
import * as types from '../mutation-types'
import random from '../../../mock/todos'

let items = random(30,25,30, num => random(num, 1, 22, index => 'qwertyuiopasdfghjklzxcvbnm'.substr(index, 1))
  .join(''))
  .map(value => {return {content:value};});



export default {
    //初始化的状态
  state:{
    items,
    keyword:'',
  },
  //用于定义从state中派生出一些状态
  getters:{
    items(state){
      if (state.keyword){
        console.info(state.keyword,'enter filter');
        return state.items.filter( item => {
          return ~item.content.search(state.keyword) !== 0;
        })
      }
      return state.items;
    }
  },

  actions:{
    //异步逻辑都应该封装到这里里。

  },
  mutations:{
    //提交 mutation 是更改状态的唯一方法，并且这个过程是同步的
    [types.ADD_TODO](state,item){
      state.items.unshift({content:item});
    },
    [types.SEARCH](state,keyword){
      state.keyword = keyword;
    }
  }
};
