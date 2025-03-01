import React from 'react';
import { RoutesType } from './types';
import { ProtectedRoute } from './ProtectedRoutes';
import { PublicRoutes } from './public-router';

// ** Private Routes **
export const PrivateRoutes: RoutesType[] = [
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: '',
        element: <></>,
      },
    ],
  },
];

export const Routes: RoutesType[] = [...PublicRoutes, ...PrivateRoutes];
