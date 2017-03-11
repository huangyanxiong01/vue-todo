// @flow
import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import items from './modules/items'

Vue.use(Vuex);
const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    items
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
