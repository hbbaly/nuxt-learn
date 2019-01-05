<template>
  <!-- 这个是嵌套路由 -->
  <div>
    <h1>这里是嵌套路由 {{ this.$route.path }}页面</h1>
    <p>{{ topicList }}</p>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  // asyncData方法会在组件（限于页面组件）会将 asyncData 返回的数据融合组件 data 方法返回的数据一并返回给当前组件
  // 由于asyncData方法是在组件 初始化 前被调用的，所以在方法内是没有办法通过 this 来引用组件的实例对象。
  // 如果你使用 回调函数 的方式, 你可以将错误的信息对象直接传给该回调函数， Nuxt.js 内部会自动调用 error 方法：
  async asyncData({ context, error }) {
    return axios
      .get(`https://cnodejs.org/api/v1/topics?page=1&limit=15`)
      .then(res => {
        return { topicList: res.data.data }
      })
      .catch(e => {
        error({ statusCode: 404, message: 'Post not found' })
      })
  }
}
</script>
