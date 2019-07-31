<template>
  <div>
    <span>flex子组件属性演示</span>
    <p>注：flex容器已设置align-items:center, justify-content:space-evenly</p>
    <div class="div1">
      <div class="ul1" :style="styleObject">
        <div class="licontain" v-for="(item,index) in [1,2,3]" :key="index">
          <span>this is test {{item}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    data () {
      return{
      }
    },
    methods:{

    },
    watch:{

    }
  }
</script>

<style scoped lang="less">
  @import "flexc.less";
</style>
