import React from 'react';
import { RoutesType } from './types';
import { ProtectedRoute } from './ProtectedRoutes';
import { PublicRoutes } from './public-router';
import ErrorBoundary from '../components/Errorboundary';

// ** Private Routes **
export const PrivateRoutes: RoutesType[] = [
  {
    element: <ProtectedRoute />,
    index: false,
    errorElement: <ErrorBoundary />, // common error boundry element
    children: [
      {
        path: '/',
        element: <></>,
      },
    ],
  },
];

export const Routes: RoutesType[] = [...PublicRoutes, ...PrivateRoutes];
