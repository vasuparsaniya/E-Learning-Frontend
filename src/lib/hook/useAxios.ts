import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { useState } from 'react';
import { axiosHandler } from '../helper/axiosHandler';

type PostRequestFn = (
  url: string,
  data?: Record<string, any>,
  config?: AxiosRequestConfig<Record<string, any>>,
) => Promise<AxiosResponse | null>;

export const usePostRequest = (): [
  PostRequestFn,
  boolean,
  AxiosError | null,
] => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<AxiosError | null>(null);
  const postRequest: PostRequestFn = async (
    url: string,
    data: Record<string, any> = {},
    config: AxiosRequestConfig<Record<string, any>> = {},
  ): Promise<AxiosResponse | null> => {
    try {
      setIsLoading(true);
      const response = await axiosHandler.post(`${url}`, data, config);
      setIsLoading(false);
      return response;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(error);
      } else {
        console.log('Unexpected Error From postRequest', error);
      }
      return null;
    } finally {
      setIsLoading(false);
    }
  };
  return [postRequest, isLoading, error];
};
