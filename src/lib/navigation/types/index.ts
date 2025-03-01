import { JSX } from 'react';

export type RoutesType = {
  path?: string;
  element: JSX.Element;
  children?: RoutesType[];
};
