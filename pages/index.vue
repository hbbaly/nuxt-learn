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
  components: {}
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
