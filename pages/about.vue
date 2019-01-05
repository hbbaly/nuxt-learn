<template>
  <div>
    <h1>这里是about页面</h1>
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
