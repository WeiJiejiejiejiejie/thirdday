import Vue from 'vue'
// import home from '../views/tabs/home'
// import search from '../views/tabs/search'
// import user from '../views/tabs/user'
// import main from '../views/main'
// import hello from '../views/hello'
import VueRouter from 'vue-router'
// import address from '../views/address'
import adda from "../components/adda";
import equi from "../components/equi";
import life from "../components/life";
import phone from "../components/phone";
import voice from "../components/voice";
import shopping from "../components/shopping";

import HelloWorld from "../components/HelloWorld";
Vue.use(VueRouter)

let router = new VueRouter({
    routes:[
        {path:"/",redirect:"/list"}, // 设置首页
        {path:"/list",component:adda},
        {path:"/equi",component:equi},
        {path:"/life",component:life},
        {path:"/phone",component:phone},
        {path:"/voice",component:voice},
        {path:"/shopping",component:shopping},
        {path:"/detail",component:HelloWorld},//?id=1&name=2
        {name:"d", path:"/detail/:id",component:HelloWorld} //?id= -/:id 参数占位
    ]
    // {
    //   path: '/login',
    //   component: hello
    // },
    // {
    //   path: '/',
    //   redirect: '/main'
    // }
    // {
    //   path: '/main',
    //   component: main,
    //   children: [
    //     {
    //       path: '',
    //       component: home
    //     },
    //     {
    //       path: 'search',
    //       component: search
    //     },
    //     {
    //       path: 'user',
    //       component: user
    //     }
    //   ]
    // }

})

// 全局路由guard 前置guard user ->main -> login
// router.beforeEach((to, from, next) => {
//   // eslint-disable-next-line no-console
//   console.log(to.path) // to from $route
//   // eslint-disable-next-line no-console
//   console.log(from.path)
//   // let token = localStorage.getItem('token')
//   next()
//   // if (token) {
//   //   next('/main')
//   // } else {
//   //   next('/login')
//   // }
// })

// eslint-disable-next-line no-unused-vars
// router.afterEach((to, from) => {
//   // window.confirm('您真的需要退出吗!')
//   // eslint-disable-next-line no-console
//   console.log('afterEach')
// })

export default router
