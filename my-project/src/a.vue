<template>
  <div>
  <div>{{ hello }}</div>
    {{ numberToDo }}
  <button v-on:click="emitMyEvent">my-event</button>
    <slot name="header">no header</slot>
    <slot name="footer">no footer</slot>
  </div>
</template>

<script>
  export default {
    //父组件像子组件传递数据 props
    props: {
      'number-to-do': [Number, String]
    },
    data () {
      return {
        hello: '我是componentA'
      }
    },
    methods : {
      emitMyEvent () {
        //触发自定义函数
        //子组件通过$emit来触发事件，将参数传递出去。
        this.$emit('my-event', this.hello);
      }
    }
  }
</script>
