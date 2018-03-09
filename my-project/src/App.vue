<template>
  <div id="app">
    {{ hello }}
    <p v-html="hello"></p>
    <p v-text="hello"></p>
    <p>{{ num + 1 }}</p>
    {{ status ? 'success' : 'fasle' }}
    <!-- v-for -->
    <ul>
      <li v-for="(item, index) in list" :class="{odd: index % 2}">{{ item.name }}- {{ item.price }}-{{ index }}</li>
    </ul>
    <button v-on:click="addItem">list addItem</button>
    <ul>
      <li v-for="(item, index) in objList" :class="{odd: index % 2}">{{ index }}- {{ item }}</li>
    </ul>
    <br>
    <a v-if="isPartA">PartA</a>
    <a v-else>no-data</a>
    <!--<a v-show="!isPartA">PartB</a>-->
    <button v-on:click="toggle">toggle</button>
    <input @keydown="onkeydown" placeholder="keydown">
    <input @keydown.13="onkeydown">
    <!--表单-->
    <!--v-model变量需在data声明-->
    <input v-model="myValue" type="text" placeholder="v-model" >
    {{ myValue }}
    {{ myValueWithoutNum }}
    {{ getmyValueWithoutNum () }}
    <input v-model="myVal" type="text" placeholder="watch" >
    <!--<input v-model.lazy="myValue" type="text" placeholder="v-model.lazy">-->
    <!--<input v-model.number="myValue" type="text" placeholder="v-model.number">-->
    <!--<input v-model.trim="myValue" type="text" placeholder="v-model.trim">-->
    <br>
    <input v-model="myBox" type="checkbox" value="apple">
    <input v-model="myBox" type="checkbox" value="cherry">
    <input v-model="myBox" type="checkbox" value="bannana">
    {{ myBox }}
    <br>
    <!--<input v-model="myBox" typ e="radio" value="apple">-->
    <!--<input v-model="myBox" type="radio" value="cherry">-->
    <!--<input v-model="myBox" type="radio" value="bannana">-->
    <select name="" id="" v-model="selection">
      <option value="1" >1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    {{ selection }}
    <select  v-model="selection">
      <option v-for="item in selectOption" :value="item.value">{{ item.text }}</option>
    </select>
    <br>
    <a v-bind:href="link">link</a>
    <!--样式,v-bind-->
    <a v-bind:class="[classNameObj,classNameArray, {'black-font':hasErr}]" :style="linkCss">link</a>
    <!--子组件-->
    <componentA :dataA="dataA"></componentA>
    <component-a @my-event="onCompMyEvent"></component-a>
    <router-view/>
  </div>
</template>

<script>
  import Vue from 'vue'
import componentA from './a'
export default {
  name: 'App',
  data () {
    return {
      myVal:null,
      selectOption :[
        {
          text: 'apple1',
          value: 1
        },
        {
          text: 'apple2',
          value: 2
        },
        {
          text: 'apple3',
          value: 3
        }
      ],
      selection: null,
      myBox: [],
      myValue: '',
      hello: '<p>world</p>',
      link: 'http://www.baidu.com',
      dataA: 'dataAA11',
      isPartA: true,
      classNameObj: {
        'red-font': true,
        'blue-font': false
      },
      classNameArray : ['red-font','blue-font'],
      linkCss: {
        'color': 'red',
        'font-size': '20px'
      },
      hasErr:true,
      num: 1,
      status: true,
      list: [
        {
          name: 'apple',
          price: 21
        },
        {
          name: 'banana',
          price: 11
        }
      ],
      objList: {
        name: 'mango',
        price: 55
      }
    }
  },
  components: {
    componentA
  },
  methods: {
    addItem () {
      //对某一条数据的修改
      Vue.set(this.list, 1, {
        name: 'paipi',
        price: 13
      })
      //动态控制数据的增减
      this.list.push({
        name: 'apple1111',
        price: 21
      })
    },
    toggle () {
      this.isPartA = !this.isPartA;
    },
    onkeydown () {
      console.log(' on keydown')
    },
    onCompMyEvent (parmformA) {
      //parmformA 子组件my-event事件传递过来的参数
      console.log(' onCompMyEvent'+parmformA)
    },
    getmyValueWithoutNum () {
//      return this.myValue.replace(/\d/g, '');
      return Date.now();
    },
  },
  //计算属性
  //其他属性的变化同步更新
  //methods里面定义的函数，是需要主动调用的
  //watch和computed相关的函数，会自动调用; 只要依赖数据没有发生变化,computed就不会再度进行计算
  computed: {
    myValueWithoutNum () {
//      return this.myValue.replace(/\d/g, '');
      return Date.now()
    }
  },
  watch: {
    myVal(oldVal, newVal) {
      console.log(oldVal, newVal)
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
