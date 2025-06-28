import React from 'react';
import { get } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { getIsAuthenticate } from '../redux/slices/auth.slice';
import { Navigate, Outlet } from 'react-router-dom';
import { PRIVATE_NAVIGATION_CONSTANT } from './navigation.constant';

const ProtectedPublicRoutes = () => {
  // ** Redux **
  const isAuthenticated = useSelector(getIsAuthenticate);

  return isAuthenticated ? (
    <Navigate to={PRIVATE_NAVIGATION_CONSTANT.dashboard.view} replace />
  ) : (
    <Outlet />
  );
};

export default ProtectedPublicRoutes;
