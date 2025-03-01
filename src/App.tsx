import React from 'react';
import './assets/css/App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Routes } from './lib/navigation/router';

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false, // default: true
        staleTime: 5 * 10000, //----after this time new data fetch
        gcTime: 5 * 10000, //---if data not use within gcTime then cache data clean
      },
    },
  });
  const router = createBrowserRouter(Routes);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;
