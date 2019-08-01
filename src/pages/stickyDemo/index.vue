<template>
  <div class="q">
    <div class="container">
      <div class="header">这是一个头部</div>
      <div class="content" v-for="item in [0,1,2,3,4,5,6,7,8,9,10]">我们在中间滑呀滑{{item}}</div>
      <div class="a">我是一个打酱油的</div>
      <div class="content" v-for="item in [10,9,8,7,6,5,4,3,2,1,0]">我们在中间滑呀滑{{item}}</div>
      <div class="footer">这是一个底部</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index"
  }
</script>

<style scoped lang="less">
  @import "stickyDemo.less";
</style>

