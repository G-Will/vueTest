<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ fatherMsg }}</h1>
    <button v-on:click="onClickMe">open mouse!</button>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      msg: 'hello from component a!',
      fatherMsg: this.msgFromFather
    }
  },
  // inheritAttrs: false,
  props: ['msgFromFather'],
  methods: {
    onClickMe: function () {
      // 触发父组件中的事件 child-tell-me-something， 并传一个值过去
      // 一：双向绑定————会带来维护上的问题，因为子组件可以修改父组件，
      //      且在父组件和子组件都没有明显的改动来源。
      // this.$emit('child-tell-me-something', this.msg)
      // 二：update:my-prop-name 的模式触发事件
      this.$emit('update:title', this.msg) // 表示对其赋新值
    }
  }
}
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>
