/*  eslint-disable react/react-in-jsx-scope */
import LoginPage from '@pages/login';
import { RouteObject } from 'react-router-dom';

export default [
  {
    path: '/',
    element: <LoginPage />,
  },
] as RouteObject[];
