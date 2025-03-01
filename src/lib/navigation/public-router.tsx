// ** Public Routes **

import React from 'react';
import { PUBLIC_NAVIGATION_CONSTANT } from './navigation.constant';
import { RoutesType } from './types';

// const SignUp = React.lazy(() => import(''));
// const Login = React.lazy(() => import(''));

export const PublicRoutes: RoutesType[] = [
  {
    path: PUBLIC_NAVIGATION_CONSTANT.auth.login.view,
    // element: <Login />,
    element: <></>,
  },
];
