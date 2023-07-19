/*  eslint-disable react/react-in-jsx-scope */
import DetailPage from '@pages/detail';
import HomePage from '@pages/home';
import LoginPage from '@pages/login';
import RegisterPage from '@pages/register';
import RegisterAddressPage from '@pages/register/address';
import { RouteObject } from 'react-router-dom';

export default [
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    path: 'register',
    children: [
      { index: true, element: <RegisterPage /> },
      {
        path: 'address',
        element: <RegisterAddressPage />,
      },
    ],
  },
  {
    path: 'home',
    element: <HomePage />,
  },
  {
    path: 'food/:id',
    element: <DetailPage />,
  },
] as RouteObject[];
