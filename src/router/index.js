import Vue from 'vue'
import Router from 'vue-router'
import index from "../page/index"
import Login from "../page/login"
import linjunjie from "../components/1"
import junjie from "../components/2"
import jie from "../components/3"
import xitong from "../components/4"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '登录',
      meta:{
        title:'登录'
      },
      component: Login
    },
    {
      path: '/index',
      name: '首页',
      meta:{
        title:'首页'
      },
      component: index,
      children: [
        {
          path: '/linjunjie',
          component: linjunjie
        },
        {
          path: '/junjie',
          component: junjie
        },
        {
          path: '/jie',
          component: jie
        },
        {
          path: '/xitong',
          component: xitong
        }
      ]
    }
  ]
})
