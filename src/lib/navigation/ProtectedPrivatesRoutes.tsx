import React, { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { PUBLIC_NAVIGATION_CONSTANT } from './navigation.constant';
import { useSelector } from 'react-redux';
import { getIsAuthenticate } from '../redux/slices/auth.slice';
import { useAuth } from '@/modules/Auth/hooks/useAuth';

const ProtectedPrivateRoute = () => {
  const isAuthenticated = useSelector(getIsAuthenticate);

  const { authCheck, isLoginUserLoading } = useAuth();

  useEffect(() => {
    console.log('====isLoginUserLoading', { isLoginUserLoading });
    const checkAuth = async () => {
      await authCheck();
    };
    if (!isLoginUserLoading) {
      checkAuth();
    }
  }, []);

  console.log('=====isAuthenticated', { isAuthenticated });

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to={PUBLIC_NAVIGATION_CONSTANT.auth.view} replace />
  );
};

export default ProtectedPrivateRoute;
