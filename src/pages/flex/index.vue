<template xmlns="http://www.w3.org/1999/html">
  <div>
    <span>flex父容器部分属性演示</span>
    <p>注：各属性的第一个选项即为默认值</p>
    <div class="div1">
      <div class="ul1" :style="styleObject">
        <div class="licontain" v-for="(item,index) in [1,2,3,4,5,6,7]" :key="index">
          <span>this is test {{item}}</span>
        </div>
      </div>
      <div class="radio-container">
        <span>justify-content属性：</span>
        <ul class="ul2">
          <label class="myradio" v-for="(item,index) in justifyContentList">
            <input class="radio-icon" type="radio" name="justifyContent" :value="item" v-model="justifyContentpicked"
                   :key="index">
            <span class="radio-content">{{item}}</span>
          </label>
        </ul>
<!--        <span>Picked: {{ justifyContentpicked }}</span>-->
      </div>
      <div class="radio-container">
        <span>align-items属性：</span>
        <ul class="ul2">
          <label class="myradio" v-for="(item,index) in alignItemsList">
            <input class="radio-icon" type="radio" name="alignItems" :value="item" v-model="alignItemspicked"
                   :key="index">
            <span class="radio-content">{{item}}</span>
          </label>
        </ul>
<!--        <span>Picked: {{ alignItemspicked }}</span>-->
      </div>
      <div class="radio-container">
        <span>align-content属性：</span>
        <ul class="ul2">
          <label class="myradio" v-for="(item,index) in alignContentList">
            <input class="radio-icon" type="radio" name="alignContent" :value="item" v-model="alignContentpicked"
                   :key="index">
            <span class="radio-content">{{item}}</span>
          </label>
        </ul>
<!--        <span>Picked: {{ alignContentpicked }}</span>-->
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        justifyContentpicked: "",
        alignItemspicked: "",
        alignContentpicked: "",
        styleObject: {
          justifyContent: "flex-start",
          alignItems: "stretch",
          alignContent: "stretch",
        },
        justifyContentList: ["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"],
        alignItemsList: ["stretch", "flex-start", "flex-end", "center", "baseline"],
        alignContentList: ["stretch", "flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"]
      }
    },
    methods: {},
    watch: {
      justifyContentpicked: function () {
        this.styleObject.justifyContent = this.justifyContentpicked;
      },
      alignItemspicked: function () {
        this.styleObject.alignItems = this.alignItemspicked;
      },
      alignContentpicked: function () {
        this.styleObject.alignContent = this.alignContentpicked;
      }
    }
  }
</script>

<style scoped lang="less">
  @a: 5px;
  @import "flex.less";
</style>
