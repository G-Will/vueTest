// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import TodoList from './TodoList'
import DynamicComponent from './DynamicComponent'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  // el: '#todo-list',
  el: '#dynamic-component-demo', // 动态组件demo
  router,
  // components: { TodoList },
  // template: '<TodoList/>'
  components: { DynamicComponent },
  template: '<DynamicComponent/>'
})
