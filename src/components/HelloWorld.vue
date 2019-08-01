<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li>
        <router-link  class="tag" to="flex">flex-demo（父容器justify-content, align-items, align-content）</router-link>
        <span>2019年7月30日</span>
      </li>
      <li>
        <router-link class="tag" to="flexChild">flex-demo（子组件属性）</router-link>
        <span>2019年7月31日</span>
      </li>
      <li>
        <router-link class="tag" to="flexShopDemo">flex头尾固定</router-link>
        <span>2019年7月31日</span>
      </li>
      <li>
        <router-link class="tag" to="stickyDemo">position:sticky粘性布局</router-link>
        <span>2019年8月1日</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      skip: function () {
        this.$router.push({path: '/flex'})
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    width: 75%;
    margin-left: auto;
    margin-right: auto;
    list-style-type: none;
    padding: 0;
  }

  li {
    width: 100%;
    display: inline-block;
    margin: 10px 10px;
    border-bottom: 10px;
    height: 30px;
  }

  .tag {
    float: left;
    color: #42b983;
    font-size: 25px;
    text-decoration: none;
  }

  .tag:hover {
    color: red;
  }

  span {
    float: right;
    font-size: 25px;
  }
</style>
