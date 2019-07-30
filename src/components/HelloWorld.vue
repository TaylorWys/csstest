<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li>
        <div class="tag" @click="skip">flex-demo（父容器justify-content, align-items, align-content）</div>
        <span>2019年7月30日</span>
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
    margin: 0 10px;
    border-bottom: 10px;
    height: 30px;
  }

  .tag {
    float: left;
    color: #42b983;
    font-size: 25px;
  }

  .tag:hover {
    color: red;
  }

  span {
    float: right;
    font-size: 25px;
  }
</style>
