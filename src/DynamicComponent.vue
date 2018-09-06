<template>
  <div id="dynamic-component-demo">
    <button
      v-for="tab in tabs"
      v-bind:key="tab"
      v-bind:class="['tab-button', { active: currentTab === tab }]"
      v-on:click="currentTab = tab"
    >{{ tab }}</button>

    <!-- 使用<keep-alive>元素包裹动态组件，可使那些标签的组件实例
      能够被在它们第一次被创建的时候缓存下来 -->
    <keep-alive>
    <!-- is属性作用：当 `currentTabComponent` 这个计算属性改变时，外层<component>组件也跟着改变 -->
    <!-- 即，会变成<tab-posts>、<tab-archive> -->
      <component
        v-bind:is="currentTabComponent"
        class="tab"
      ></component>
    </keep-alive>

  </div>
</template>

<script>
import tabPosts from './components/tabPosts'
import tabArchive from './components/tabArchive'

export default {
  // 注册组件
  components: {
    tabPosts, tabArchive
  },
  data: function () {
    return {
      test: 'message from father',
      currentTab: 'Posts',
      tabs: ['Posts', 'Archive']
    }
  },
  computed: {
    // 点击标签页后，显示当前标签的组件
    currentTabComponent: function () {
      return 'tab-' + this.currentTab.toLowerCase()
    }
  }
}
</script>

<style scoped>
.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
.tab {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
