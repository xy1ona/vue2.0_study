<template>
  <div id="app">
    <transition name="fade">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>

    <!--<router-link to="/a">to A</router-link>-->
    <!--<router-link :to="{path: '/a'}" tag="li">to A</router-link>-->
    <router-link :to="{name: 'A'}">to A</router-link>
    <router-link to="/b" >to B</router-link>
    <router-link to="/a/red">to RedA</router-link>
    <br>
    <br>
    {{ totalPrice }}
    <c></c>
    <d></d>
  </div>
</template>

<script>
  import C from './components/c'
  import D from './components/d'
export default {
  name: 'App',
  data () {
    return {
      price:5
    }
  },
  components:{
    C,
    D
  },
  computed: {
    totalPrice () {
//      return this.$store.state.totalPrice
      return this.$store.getters.getTotal
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
