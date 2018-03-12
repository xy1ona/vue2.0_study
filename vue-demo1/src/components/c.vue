<template>
  <div>
    {{ msg }}
    <button @click="addOne">addOne</button>
    <button @click="minusOne">minusOne</button>
  </div>
</template>

<script>
  export default {
    name: 'C',
    data () {
      return {
        msg: 'I AM C',
        price:5
      }
    },
    methods : {
      addOne () {
//        this.$store.commit('increment', this.price)
        this.$store.dispatch('increase', this.price)
      },
      minusOne () {
        this.$store.commit('decrement', this.price)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
