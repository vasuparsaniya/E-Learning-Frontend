import React from 'react';
import { useRouteError } from 'react-router-dom';
type ErrorboundaryType = {
  status: number;
  statusText: string;
  internal: boolean;
  data: string;
};
const ErrorBoundary = () => {
  const error = useRouteError() as ErrorboundaryType;
  console.error(error);

  return (
    <p>Errorboundary == Something went wrong: {error?.data || String(error)}</p>
  );
};

export default ErrorBoundary;
