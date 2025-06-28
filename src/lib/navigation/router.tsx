import React from 'react';
import { RoutesType } from './types';
import ProtectedPrivateRoute from './ProtectedPrivatesRoutes';
import { PublicRoutes } from './public-router';
import ErrorBoundary from '../components/Errorboundary';

// ** Private Routes **
export const PrivateRoutes: RoutesType[] = [
  {
    element: <ProtectedPrivateRoute />,
    index: false,
    errorElement: <ErrorBoundary />, // common error boundry element
    children: [
      {
        path: '/dashboard',
        element: <></>,
      },
    ],
  },
];

export const Routes: RoutesType[] = [...PublicRoutes, ...PrivateRoutes];
