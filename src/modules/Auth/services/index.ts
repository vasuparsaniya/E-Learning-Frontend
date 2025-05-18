import { AxiosRequestConfig } from 'axios';
import { usePostRequest } from 'src/lib/hook/useAxios';

const path = '/auth';
export const useSignup = () => {
  const [postRequest, isLoading, error] = usePostRequest();

  const signup = async (
    data: Record<string, any> = {},
    config: AxiosRequestConfig<Record<string, any>> = {},
  ) => {
    const response = await postRequest(`${path}/signup`, data, config);
    return response;
  };
  return { signup, isLoading, error };
};

export const useLogin = () => {
  const [postRequest, isLoading, error] = usePostRequest();

  const login = async (
    data: Record<string, any> = {},
    config: AxiosRequestConfig<Record<string, any>> = {},
  ) => {
    const response = await postRequest(`${path}/login`, data, config);
    return response;
  };
  return { login, isLoading, error };
};
