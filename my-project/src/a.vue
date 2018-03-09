<template>
  <div>
  <div>{{ hello }}</div>
  <button v-on:click="emitMyEvent">my-event</button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        hello: '我是componentA'
      }
    },
    methods : {
      emitMyEvent () {
        //触发自定义函数
        //子组件通过$emit来触发事件，将参数传递出去。
        this.$emit('my-event', this.hello)
      }
    }
  }
</script>
