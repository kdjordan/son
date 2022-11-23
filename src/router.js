import { createWebHistory, createRouter } from 'vue-router';


// layouts
import Admin from "@/layouts/Admin.vue";
import Auth from "@/layouts/Auth.vue";


// views for Auth layout
import Login from "@/views/auth/Login.vue";
import Logout from "@/views/auth/Logout.vue";
import Callback from "@/views/auth/Callback.vue";


// views for Admin layout
import Dashboard from "@/views/admin/Dashboard.vue";
import AddFunds from "@/views/admin/AddFunds.vue";
import CallDetailReports from "@/views/admin/CallDetailReports.vue";
import Settings from "@/views/admin/Settings.vue";
import Invoices from "@/views/admin/Invoices.vue";


import { routeGuard } from './auth';
// routes

const routes = [
    {
      path: "/admin",
      redirect: "/admin/dashboard",
      component: Admin,
      children: [
        {
          path: "/admin/dashboard",
          component: Dashboard,
          beforeEnter: routeGuard 
        },
        {
          path: "/admin/settings",
          component: Settings,
          beforeEnter: routeGuard
        },
        {
          path: "/admin/invoices",
          component: Invoices,
          beforeEnter: routeGuard
        },
        {
          path: "/admin/cdrs",
          component: CallDetailReports,
          beforeEnter: routeGuard
        },
        {
          path: "/admin/addfunds",
          component: AddFunds,
          beforeEnter: routeGuard
        },
      ],
    },
    {
      path: "/",
      redirect: "/auth/login",
      component: Auth,
      children: [
        {
          path: "/auth/login",
          component: Login,
        },
        {
          path: "/auth/logout",
          component: Logout,
        },
        {
          path: '/auth/callback',
          name: 'Callback',
          component: Callback
        },
      ],
    },
    { path: "/:pathMatch(.*)*", redirect: "/" },
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });

export default router;