import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import A from '../components/a'
import B from '../components/b'
import RedA from '../components/reda'
Vue.use(Router)

export default  new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/a'   //重定向
    },
    {
      // path: '/a/:color/detail/:type', //设置参数，之后必须有完整路径，才能访问
      path: '/a',
      name: 'A',
      component: A,
      children: [     //A的子组件
        {
          path: 'red',
          component: RedA,
        }
      ]
    },
    {
      path: '/b',
      // name: 'B',
      component: B
    }
  ]
})


