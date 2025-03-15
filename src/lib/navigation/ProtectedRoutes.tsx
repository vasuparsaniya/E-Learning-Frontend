import React from 'react';

import { Navigate, Outlet } from 'react-router-dom';
import { PUBLIC_NAVIGATION_CONSTANT } from './navigation.constant';

const ProtectedRoute = () => {
  // const [cookies] = useCookies(['token']);
  // console.log('cookies');
  // console.log(cookies);
  return false ? (
    <Outlet />
  ) : (
    <Navigate to={PUBLIC_NAVIGATION_CONSTANT.auth.view} replace />
  );
};

export { ProtectedRoute };
