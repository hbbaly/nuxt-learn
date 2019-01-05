<template>
  <div>
    <h1>这里是about页面</h1>
    <p>{{ 'my name is ' | dealName }}</p>
  </div>
</template>
<script>
export default {
  transition: {
    name: 'slide-right',
    mode: 'out-in'
  },
  head() {
    return {
      title: '这里是关于页面',
      meta: [
        { hid: 'description', name: 'description', content: '这里是关于页面' }
      ]
    }
  }
}
</script>
