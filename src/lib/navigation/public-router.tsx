// ** Public Routes **

import React from 'react';
import { PUBLIC_NAVIGATION_CONSTANT } from './navigation.constant';
import { RoutesType } from './types';
import ProtectedPublicRoutes from './ProtectedPublicRoutes';
import ErrorBoundary from '../components/Errorboundary';

const Authentication = React.lazy(() => import('../../modules/Auth/index'));

export const PublicRoutes: RoutesType[] = [
  {
    element: <ProtectedPublicRoutes />,
    index: false,
    errorElement: <ErrorBoundary />, // common error boundry element
    children: [
      {
        path: PUBLIC_NAVIGATION_CONSTANT.auth.view,
        element: <Authentication />,
      },
    ],
  },
];
