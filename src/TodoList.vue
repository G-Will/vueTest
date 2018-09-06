<template>
  <div id="todo-list">
    <h1>{{ title }}</h1>
    <h1>{{ post.title }}</h1>
    <input v-model="newItem" v-on:keyup.enter="addNew">
    <!-- 和上边一样 -->
    <!-- <h1 v-text="title"></h1> -->
    <!-- <h1 v-html="title"></h1> -->
    <ul>
      <li v-for="(item, key, index) in items" :key="index" v-bind:class="{finished:
        item.isFinished}" v-on:click="toggleFinish(item)">
        {{item.label}}
      </li>
    </ul>
    <p>child tells me: {{ childWords }}</p>
    <div id="child">
      <!-- 自定义组件命名，得采用短线连接的形式，全部小写 -->
      <!-- 一：双向绑定————会带来维护上的问题，因为子组件可以修改父组件，
              且在父组件和子组件都没有明显的改动来源。 -->
      <!-- <component-a v-bind:msg-from-father="post.title"
        v-on:child-tell-me-something="listenToMyBoy">
      </component-a> -->
      <!-- 二：update:my-prop-name 的模式触发事件  -->
      <!-- <component-a v-bind:post.title="post.title"
        v-on:update:title="post.title = $event">
      </component-a> -->
      <!-- 以上方法的缩写，使用.sync修饰符 -->
      <component-a v-bind:title.sync="post.title">
      </component-a>
    </div>
  </div>
</template>

<script>
import Store from './store'
// 引入自定义组件
import ComponentA from './components/componentA'

export default {
  // 组件必须使用以下格式注册才能使用
  components: {
    ComponentA
  },
  data: function () {
    return {
      title: 'this is a todo list',
      items: Store.fetch(), // 将items保存在浏览器的localStorage中，刷新页面数据不会被清除
      newItem: '',
      childWords: '', // 从子组件传过来的值也得在data中初始化
      post: {
        id: 1,
        name: 'xiaoming'
        title: 'msg from father component'
      }
    }
  },

  watch: {
    items: {
      handler: function (items) {
        // console.log(val, oldVal)
        Store.save(items)
      },
      // deep设置为false后，页面修改的状态不会被同步保存到localStorage中
      deep: true
    }
  },
  events: {
    'child-tell-me-something': function (msg) {
      this.childWords = msg
    }
  },
  methods: {
    toggleFinish: function (item) {
      // 对isFinished取反
      item.isFinished = !item.isFinished
    },
    addNew: function () {
      this.items.push({
        label: this.newItem,
        isFinished: false
      })
      this.newItem = ''
    },
    listenToMyBoy: function (msg) {
      this.childWords = msg
    }
  }
}
</script>

<style scoped>
/* scoped限制该样式文件只能在当前文件中使用 */
.finished {
  text-decoration: line-through;
}
ul {
  margin-left: auto;
  margin-right: auto;
  width: 180px;
}
html {
  height: 100%;
}
div #child {
  text-align: center;
  /* border:2px solid rgb(0, 4, 255); */
}

#todo-list {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  /* border:2px solid rgb(255, 72, 0); */
}
</style>
