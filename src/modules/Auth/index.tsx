import React, { useEffect } from 'react';
import { useState } from 'react';
import { AUTHENTICATION_TAB } from './types';
import SignupComponent from './components/signup';
import LoginComponent from './components/login';
import { useSelector } from 'react-redux';
import { getIsAuthenticate } from '@/lib/redux/slices/auth.slice';
import { useNavigate } from 'react-router-dom';
import { PRIVATE_NAVIGATION_CONSTANT } from '@/lib/navigation/navigation.constant';

const Authentication = () => {
  // ** Hooks **
  const navigate = useNavigate();
  // ** Redux **
  const isAuthenticated = useSelector(getIsAuthenticate);
  // ** State **
  const [activeTab, setActiveTab] = useState<AUTHENTICATION_TAB>(
    AUTHENTICATION_TAB.SIGNUP,
  );
  const activeTabClass = 'bg-slate-50 rounded-[6px]';

  useEffect(() => {
    if (isAuthenticated) {
      // Redirect to dashboard or home page if already authenticated
      navigate(PRIVATE_NAVIGATION_CONSTANT.dashboard.view);
    }
  }, [isAuthenticated]);

  return (
    <>
      <div className="flex justify-center min-h-screen pt-2">
        <div className="flex flex-col gap-1 w-[500px]">
          <div className="flex gap-2 w-full p-[6px] bg-slate-300 rounded-[12px]">
            <p
              className={`w-[50%] text-center cursor-pointer ${activeTab === AUTHENTICATION_TAB.SIGNUP && activeTabClass}`}
              onClick={() => setActiveTab(AUTHENTICATION_TAB.SIGNUP)}
            >
              Signup
            </p>
            <p
              className={`w-[50%] text-center cursor-pointer ${activeTab === AUTHENTICATION_TAB.LOGIN && activeTabClass}`}
              onClick={() => setActiveTab(AUTHENTICATION_TAB.LOGIN)}
            >
              Login
            </p>
          </div>
          <div className="flex flex-col gap-2 w-full p-[20px] bg-slate-50 rounded-[12px]">
            {activeTab === AUTHENTICATION_TAB.SIGNUP && (
              <SignupComponent setActiveTab={setActiveTab} />
            )}
            {activeTab === AUTHENTICATION_TAB.LOGIN && (
              <LoginComponent setActiveTab={setActiveTab} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Authentication;
