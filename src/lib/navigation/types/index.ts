import { RouteObject } from 'react-router-dom';

export type RoutesType =
  | RecursiveIndexRouteObject
  | RecursiveNonIndexRouteObject;

// Common route property
interface SharedRouteFields extends Omit<RouteObject, 'index' | 'children'> {}

// ✅ Index route (no c0hildren, must have `index: true`)
export interface RecursiveIndexRouteObject extends SharedRouteFields {
  index: true;
  children?: undefined;
}

// ✅ Non-index route (may have children)
export interface RecursiveNonIndexRouteObject extends SharedRouteFields {
  index?: false;
  children?: RoutesType[];
}
