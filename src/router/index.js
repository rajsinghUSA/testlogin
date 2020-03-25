import Vue from "vue";
import Router from "vue-router";
//import HelloWorld from "@/components/HelloWorld";
import Home from "@/pages/Home";
import Login from "@/components/Login";
import Register from "@/components/Register";
import UserBoard from "@/components/UserBoard";
import Admin from "@/components/Admin";
import About from "@/pages/PageAbout";
import NotFound from '@/pages/PageNotFound';
import Stats from '@/components/Stats'


Vue.use(Router);

let router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: {
        guest: true
      }
    },
    // {
    //   path: "/logout",
    //   name: "logout",
    //   component: Logout,
    //   meta: {
    //     guest: true
    //   }
    // },
    {
      path: "/register",
      name: "register",
      component: Register,
      meta: {
        guest: true
      }
    },
    {
      path: "/dashboard",
      name: "userboard",
      component: UserBoard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/admin",
      name: "admin",
      component: Admin,
      meta: {
        requiresAuth: true,
        is_admin: true
      }
    },
    {
      path: "/about",
      name: "about",
      component: About,
      meta: {
        // vars here
      }
    },
    {
      path: '/stats',
      name: 'stats',
      component: Stats,
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
});

// router.beforeEach((to, from, next) => {
//   // debugger
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     if (localStorage.getItem("jwt") == null) {
//       next({
//         path: "/login",
//         params: { nextUrl: to.fullPath }
//       });
//     } else {
//       let user = JSON.parse(localStorage.getItem("user"));
//       if (to.matched.some(record => record.meta.is_admin)) {
//         if (user.is_admin == 1) {
//           next();
//         } else {
//           next({ name: "userboard" });
//         }
//       } else {
//         next();
//       }
//     }
//   } else if (to.matched.some(record => record.meta.guest)) {
//     if (localStorage.getItem("jwt") == null) {
//       next();
//     } else {
//       next({ name: "userboard" });
//     }
//   } else {
//     next();
//   }
// });

export default router;
