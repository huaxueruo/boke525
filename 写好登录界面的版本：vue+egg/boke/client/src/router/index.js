import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/Home"
import Layout from "../components/Layout"
import Book from "../views/Book"
import Blog from "../views/Blog"
import User from "../views/User"
import Video from "../views/Video"
import Resource from "../views/Resource"
import Login from "../views/Login"
Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        name: "",
        component: Layout,
        children: [
            {
                path: "/",
                name: "",
                component: Home,

            },
            {
              path: "/book",
              name: "",
              component: Book,
          },
          {
            path: "/blog",
            name: "",
            component: Blog,
        },
        {
          path: "/user",
          name: "",
          component: User,
      },
      {
        path: "/video",
        name: "",
        component: Video,
    },
    {
      path: "/resource",
      name: "",
      component: Resource,
  },
        ]
    },
    {
      path: "/login",
      name: "",
      component: Login,
  },
]





const router = new VueRouter({
  mode: 'history',   //模式  history hash ，
  base: process.env.BASE_URL, //定义一个基础URL，用的是vue-cli默认的配置项。
  routes  //配置项
})

router.beforeEach((to,from,next) => {
  if(to.path == '/login'){
    next();
  }else{
    if(localStorage.getItem("token")){
      next();
    }else{
      next("/login")
    }
  }
})


//防止element-ui路由跳转报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


export default router
