/*
 * @Descripttion:
 * @version: 1.0
 * @Author:
 * @Date: 2021-10-08 15:46:24
 * @LastEditors: YingJie Xing
 * @LastEditTime: 2021-10-09 10:26:14
 */
export default [
  {
    path: '/',
    component: '../layouts/BlankLayout',
    routes: [
      {
        path: '/login',
        component: '../layouts/UserLayout',
        routes: [
          {
            name: 'login',
            path: '/login',
            component: './Login',
          },
        ],
      },
      {
        path: '/',
        component: '../layouts/SecurityLayout',
        routes: [
          {
            path: '/',
            component: '../layouts/BasicLayout',
            routes: [
              {
                path: '/todo',
                name: 'todo',
                icon: 'UnorderedListOutlined',
                component: './Todo',
              },
              {
                path: '/dashboard',
                component: '@/pages/DashBoard',
                name: 'dashboard',
                icon: 'PieChartOutlined',
              },
              {
                path: '/',
                redirect: '/dashboard',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    component: './404',
  },
];
