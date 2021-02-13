import React from "react";
import HomeIcon from "./assets/svg/HomeIcon";
import { HomePage, LandingPage, ProfilePage, SettingPage, LoginPage, PasswordRecovery, RegisterPage } from "./modules";

const routeConfiguration = () => {
  return [
    {
      title: "Landing Page",
      path: "/",
      exact: true,
      layout: false,
      component: LandingPage,
      auth: false,
    },
    {
      title: "Login",
      path: "/Login",
      exact: true,
      layout: false,
      component: LoginPage,
      auth: false,
    },
    {
      title: "Register",
      path: "/Register",
      exact: true,
      layout: false,
      component: RegisterPage,
      auth: false,
    },
    {
      title: "PasswordRecovery",
      path: "/PasswordRecovery",
      exact: true,
      layout: false,
      component: PasswordRecovery,
      auth: false,
    },
    {
      title: "Home",
      path: "/Home",
      exact: true,
      layout: true,
      component: (props: any) => <HomePage {...props} />,
      auth: true,
      isNavMenu: true,
      navIcon: HomeIcon,
    },
    {
      title: "Account Settings",
      path: "/Account/Settings",
      exact: true,
      layout: true,
      component: (props: any) => <SettingPage {...props} />,
      auth: true,
    },

    {
      title: "ProfilePage",
      path: "/ProfilePage",
      exact: true,
      layout: true,
      component: SettingPage,
      auth: false,
    },
    {
      title: "Account",
      path: "/Account",
      exact: true,
      layout: true,
      component: ProfilePage,
      auth: true,
      isNavMenu: true,
      children: [
        {
          title: "Profile",
          component: ProfilePage,
          path: "/Account/Profile",
          exact: true,
          auth: true,
          layout: true,
        },
        {
          title: "Settings",
          component: SettingPage,
          path: "/Account/Settings",
          exact: true,
          auth: true,
          layout: true,
        },
      ],
    },
    {
      title: "Profile",
      component: ProfilePage,
      path: "/Account/Profile",
      exact: true,
      auth: true,
      layout: true,
    },
    {
      title: "Settings",
      component: SettingPage,
      path: "/Account/Settings",
      exact: true,
      auth: true,
      layout: true,
    },
  ];
};

export default routeConfiguration;
