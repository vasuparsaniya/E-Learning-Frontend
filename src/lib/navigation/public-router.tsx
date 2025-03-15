// ** Public Routes **

import React from 'react';
import { PUBLIC_NAVIGATION_CONSTANT } from './navigation.constant';
import { RoutesType } from './types';

const Authentication = React.lazy(() => import('../../modules/Auth/index'));

export const PublicRoutes: RoutesType[] = [
  {
    path: PUBLIC_NAVIGATION_CONSTANT.auth.view,
    element: <Authentication />,
  },
];
