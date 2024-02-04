import { lazy } from 'react';

const Tables = lazy(() => import('../pages/Upsell'));

const coreRoutes = [
  {
    path: '/',
    title: 'Tables',
    component: Tables,
  }
];

const routes = [...coreRoutes];
export default routes;
