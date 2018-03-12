<template>
  <div>
    {{ msg }}
    <p>{{ $route.params.color }}</p>
    <button @click="getParam">get router param</button>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'A',
    data () {
      return {
        msg: 'I AM A'
      }
    },
    methods: {
      getParam () {
        //获取参数
        console.log(this.$route.params)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
