import { createWebHistory, createRouter } from 'vue-router';


// layouts

import Admin from "@/layouts/Admin.vue";
import Auth from "@/layouts/Auth.vue";

// views for Admin layout

import Settings from "@/views/admin/Settings.vue";

import Invoices from "@/views/admin/Invoices.vue";
import Maps from "@/views/admin/Maps.vue";

// views for Auth layout

import Login from "@/views/auth/Login.vue";
import AddFunds from "@/views/admin/AddFunds.vue";
import DashSonoc from "@/views/admin/DashSonoc.vue";

// views without layouts

import Landing from "@/views/Landing.vue";
import Profile from "@/views/Profile.vue";

// routes

const routes = [
    {
      path: "/admin",
      redirect: "/admin/dashboard",
      component: Admin,
      children: [
        {
          path: "/admin/dashboard",
          component: DashSonoc,
        },
        {
          path: "/admin/settings",
          component: Settings,
        },
        {
          path: "/admin/invoices",
          component: Invoices,
        },
        {
          path: "/admin/maps",
          component: Maps,
        },
        {
          path: "/admin/addfunds",
          component: AddFunds,
        },
      ],
    },
    {
      path: "/auth",
      redirect: "/auth/login",
      component: Auth,
      children: [
        {
          path: "/auth/login",
          component: Login,
        }
      ],
    },
    {
      path: "/landing",
      component: Landing,
    },
    {
      path: "/profile",
      component: Profile,
    },
    {
      path: "/",
      redirect: "/admin/dashboard",
      component: DashSonoc,
    },
    { 
      path: "/dash",
      component: DashSonoc,
    },
    { path: "/:pathMatch(.*)*", redirect: "/" },
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });

export default router;