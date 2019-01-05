<template>
  <div class="page page-index">
    <nuxt-link 
      class="__link" 
      to="/">Index</nuxt-link>
    <nuxt-link 
      class="__link" 
      to="/about">About</nuxt-link>
    <nuxt-link 
      class="__link" 
      to="/hbb">Name</nuxt-link>
    <nuxt-link 
      class="__link"
      to="/user">/user</nuxt-link>
    <nuxt-link 
      class="__link" 
      to="/user/home">user/home</nuxt-link>
  </div>
</template>
<script>
export default {
  layout: 'blog',
  data() {
    return {
      title: '这里是首页!'
    }
  },
  // 设置了title，meta标签 ，有利于seo  为了避免子组件中的meta标签不能正确覆盖父组件中相同的标签而产生重复的现象，建议利用 hid 键为meta标签配一个唯一的标识编号。
  head() {
    return {
      title: this.title,
      meta: [{ hid: 'description', name: 'description', content: '这里是首页' }]
    }
  }
}
</script>

<style lang="less">
.page-index {
  .__link {
    display: block;
    margin-top: 20px;
    font-size: 40px;
  }
}
</style>
