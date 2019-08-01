<template>
  <div>
    <span>flex子组件属性演示</span>
    <p>注①：flex容器已设置align-items:center, justify-content:space-evenly</p>
    <p>注②：各项第一个选项为默认值</p>
    <div class="div1">
      <div class="ul1">
        <div class="licontain">
          <span>this is test 1</span>
        </div>
        <div class="licontain" :style="styleObject">
          <span>this is test 2</span>
        </div>
        <div class="licontain">
          <span>this is test 3</span>
        </div>
      </div>
    </div>
    <div class="radio-container">
      <span>order属性：</span>
      <ul class="ul2">
        <label class="my-radio" v-for="(item,index) in orderList">
          <input class="radio-icon" type="radio" name="orderList" :value="item" v-model="orderPicked"
                 :key="index">
          <span class="radio-content">{{item}}</span>
        </label>
      </ul>
    </div>
    <div class="radio-container">
      <span>flex-grow属性：</span>
      <ul class="ul2">
        <label class="my-radio" v-for="(item,index) in flexGrowList">
          <input class="radio-icon" type="radio" name="flexGrowList" :value="item" v-model="flexGrowPicked"
                 :key="index">
          <span class="radio-content">{{item}}</span>
        </label>
      </ul>
    </div>
    <div class="radio-container">
      <span>align-self属性：</span>
      <ul class="ul2">
        <label class="my-radio" v-for="(item,index) in alignSelfList">
          <input class="radio-icon" type="radio" name="alignSelfList" :value="item" v-model="alignSelfPicked"
                 :key="index">
          <span class="radio-content">{{item}}</span>
        </label>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        orderList: [-1, 0, 1],
        orderPicked: 0,
        flexGrowList: [0, 0.25, 0.5, 1],
        flexGrowPicked: 0,
        alignSelfList: ["auto", "stretch", "flex-start", "flex-end", "center", "baseline"],
        alignSelfPicked: "auto",
        styleObject: {
          color: "blue",
          order: 0,
          flexGrow: 0,
          alignSelf: "auto"
        }
      }
    },
    methods: {},
    watch: {
      orderPicked: function () {
        this.styleObject.order = this.orderPicked
      },
      flexGrowPicked: function () {
        this.styleObject.flexGrow = this.flexGrowPicked
      },
      alignSelfPicked: function () {
        this.styleObject.alignSelf = this.alignSelfPicked
      }
    }
  }
</script>

<style scoped lang="less">
  @import "flexc.less";
</style>
