<template>
  <div class="count">
    <p class="title">count++简单实现</p>
    <p class="intro">
      使用vuex步骤:
      &nbsp;&nbsp;&nbsp;&nbsp;1.npm install vuex
      &nbsp;&nbsp;&nbsp;&nbsp;2.new Vuex.store()
      &nbsp;&nbsp;&nbsp;&nbsp;3.挂载到vue实例上
    </p>
    <p class="display">count:{{this.$store.state.count}}</p>
    <button @click="increment">自增按钮</button>
    <button @click="rep">替换按钮</button>
  </div>
</template>

<script>
  export default {
    name: "index",
    methods: {
      increment() {
        this.$store.commit('increment')
      },
      rep() {
        this.$store.commit('rep', {value: 1})
      }
    }
  }
</script>

<style scoped>
  .display {
    font-size: 18px
  }

  .intro {
    white-space: pre-wrap;
  }
</style>
