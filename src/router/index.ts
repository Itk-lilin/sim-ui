import { createRouter, createWebHashHistory } from "vue-router"
import Home from "@/views/Home.vue"


const routes = [
  {
    path: "/",
    redirect: "/home"
  },

  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
// router.beforeEach((to, from, next) => {
//   if (to.meta.needLogin) {
//     const userName = sessionStorage.getItem("userName")
//     if (userName) {
//       console.log("123")
//       next()
//     } else {
//       next("/login")
//     }
//   }
//   next()
// })
export default router
