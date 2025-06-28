import { useDispatch } from 'react-redux';
import { useLoginUser } from '../services';
import { setIsAuthenticate } from '@/lib/redux/slices/auth.slice';
import { useNavigate } from 'react-router-dom';
import { PRIVATE_NAVIGATION_CONSTANT } from '@/lib/navigation/navigation.constant';

export const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loginUser, isLoading: isLoginUserLoading, error } = useLoginUser();

  const authCheck = async () => {
    const loginUserData = await loginUser({});
    if (loginUserData && !error) {
      dispatch(setIsAuthenticate(true));
      console.log('======loginUserData', { loginUserData });
      navigate(PRIVATE_NAVIGATION_CONSTANT.dashboard.view);
    } else {
      dispatch(setIsAuthenticate(false));
    }
  };

  return { authCheck, isLoginUserLoading };
};
