<template>
  <div class="shopPage">
    <div class="header">
      This is header!
    </div>
    <div class="container">
      <div class="goods" v-for="item in [0,1,2,3,4,5,6,7,8,9,10]">this is goods {{item}}</div>
    </div>
    <div class="footer">
      This is footer!
    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {}
    },
    methods: {},
    watch: {}
  }
</script>

<style scoped lang="less">
  @import "flexSd.less";
</style>
