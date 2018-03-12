<template>
  <div>
    {{ msg }}
    <button @click="addOne">addOne</button>
    <button @click="minusOne">minusOne</button>
  </div>
</template>

<script>
  export default {
    name: 'D',
    data () {
      return {
        msg: 'I AM D',
        price: 10
      }
    },
    methods : {
      addOne () {
        this.$store.commit('increment', this.price)
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
