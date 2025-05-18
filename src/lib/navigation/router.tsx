import React from 'react';
import { RoutesType } from './types';
import { ProtectedRoute } from './ProtectedRoutes';
import { PublicRoutes } from './public-router';

// ** Private Routes **
export const PrivateRoutes: RoutesType[] = [
  {
    element: <ProtectedRoute />,
    index: false,
    errorElement: <p>hello error element handle error boundary</p>, // common error boundry element
    children: [
      {
        path: '/dashboard',
        element: <></>,
      },
    ],
  },
];

export const Routes: RoutesType[] = [...PublicRoutes, ...PrivateRoutes];
