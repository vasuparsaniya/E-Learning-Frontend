import React from 'react';

import { Navigate, Outlet } from 'react-router-dom';
import { PUBLIC_NAVIGATION_CONSTANT } from './navigation.constant';

function ProtectedRoute() {
  // const [cookies] = useCookies(['token']);
  // console.log('cookies');
  // console.log(cookies);
  return true ? (
    <Outlet />
  ) : (
    <Navigate to={PUBLIC_NAVIGATION_CONSTANT.auth.login.view} replace />
  );
}

export { ProtectedRoute };
