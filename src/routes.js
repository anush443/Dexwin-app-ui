import React, { lazy } from "react";
import { Redirect } from "react-router-dom";
import DashboardLayout from "src/layouts/DashboardLayout";
// import DashboardLayoutDash from "src/layouts/DashboardLayout/indexDash";
import HomeLayout from 'src/layouts/HomeLayout';
// import LoginLayout from "src/layouts/LoginLayout";
import LeaderboardLayout from "./layouts/LeaderboardLayout";
export const routes = [
  {
    exact: true,
    path: "/",
    // guard:true,
    layout: DashboardLayout,
    component: lazy(() => import("src/views/pages/Dashboard")),
  },
  {
    exact: true,
    path: "/my-account",
    component: lazy(() => import("src/views/pages/MyAccount/MyAccount")),
    layout: DashboardLayout,
  },
  {
    exact: true,
    path: "/edit-profile",
    component: lazy(() => import("src/views/pages//MyAccount/EditProfle")),
    layout: DashboardLayout,
  },
  {
    exact: true,
    path: "/wallet",
    component: lazy(() => import("src/views/pages/Wallet/Index")),
    layout: DashboardLayout,
  },
  {
    exact: true,
    path: "/faq",
    component: lazy(() => import("src/views/pages/Frequently/Faq")),
    layout: DashboardLayout,
  },
  {
    exact: true,
    path: "/favourites",
    component: lazy(() => import("src/views/pages/Favourite/Favourite")),
    layout: DashboardLayout,
  },
  {
    exact: true,
    path: "/support",
    component: lazy(() => import("src/views/pages/Support/SuportForm")),
    layout: DashboardLayout,
  },
  {
    exact: true,
    path: "/notifications",
    component: lazy(() => import("src/views/pages/Notification/Notification")),
    layout: DashboardLayout,
  },
  {
    exact: true,
    path: "/transaction",
    component: lazy(() => import("src/views/pages/Transaction/TransctionTable")),
    layout: DashboardLayout,
  },
  {
    exact: true,
    path: "/bet-builder",
    component: lazy(() => import("src/views/pages/CosafaCupGame/BetBuilder")),
    layout: DashboardLayout,

  },
  {
    exact: true,
    path: "/view-All-Bets",
    component: lazy(() => import("src/views/pages/LeaderBoard/AllBets")),
    layout: DashboardLayout,
  },
  {
    exact: true,
    path: "/my-bets",
    component: lazy(() => import("src/views/pages/MyBets/MyBetsMain")),
    layout: DashboardLayout,
  },
  {
    exact: true,
    path: "/referrals",
    component: lazy(() => import("src/views/pages/Refferal/Referral")),
    layout: DashboardLayout,
  },
  {
    exact: true,
    path: "/leaderBoard",
    // guard:true,
    layout: LeaderboardLayout,
    component: lazy(() => import("src/views/pages/LeaderBoard/LeaderBoard")),
  },
  {
    exact: true,
    path: "/rules",
    component: lazy(() => import("src/views/pages/Rules/Bettings")),
    layout: DashboardLayout,
  },
  {
    exact: true,
    path: "/preferences",
    component: lazy(() => import("src/views/pages/Preferences/preferences")),
    layout: DashboardLayout,
  },
  {
    exact: true,
    path: "/learn-to-bet",
    component: lazy(() => import("src/views/pages/LearnToBet/learnToBet")),
    layout: DashboardLayout,
  },
  {
    exact: true,
    path: "/app",
    component: lazy(() => import("src/component/App")),
    // layout: DashboardLayout,
  },
  {
    exact: true,
    path: "/bridge-assets",
    component: lazy(() => import("src/views/pages/BridgeAssets/bridgeAssets")),
    layout: DashboardLayout,
  },
  {
    exact: true,
    path: "/404",
    component: lazy(() => import("src/views/errors/NotFound")),
  },
  // {
  //   component: () => <Redirect to="/404" />,
  // },
];