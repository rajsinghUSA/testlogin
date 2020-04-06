import Vue from "vue";
import Router from "vue-router";
import store from "../store";

//import HelloWorld from "@/components/HelloWorld";
import Home from "@/pages/Home";
import Login from "@/pages/PageLogin";
import Register from "@/components/Register";
import UserBoard from "@/components/UserBoard";
import Admin from "@/components/Admin";
import About from "@/pages/PageAbout";
import NotFound from "@/pages/PageNotFound";
import Create from "@/pages/PageCreate";
import Stats from "@/pages/PageStats";

Vue.use(Router);

let router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      meta: {
        guest: true
      }
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: {
        guest: true
      }
    },
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
        is_admin: true,
        role: "admin"
      }
    },
    {
      path: "/about",
      name: "about",
      component: About,
      meta: {
        guest: true
      }
    },
    {
      path: "/create",
      name: "create",
      component: Create
    },
    {
      path: "/stats",
      name: "stats",
      component: Stats,
      props: true,
      meta: {
        role: "authenticated"
      }
    },
    {
      path: "*",
      name: "NotFound",
      component: NotFound,
      meta: {
        guest: true
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = store.getters.isAuthenticated;
  const guestsAllowed = to.matched.some(record => record.meta.guest);
  // const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (guestsAllowed) next();
  else if (!isAuthenticated) {
  console.log(to.path)
    next({ path: "login", query: { redirectTo: to.path } });}
  else next();

  // else if (requiresAuth && !isAuthenticated) next("login");
  // else next();
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
