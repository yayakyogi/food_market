/*  eslint-disable react/react-in-jsx-scope */
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
    path: '/register',
    // element: <RegisterPage />,
    children: [
      { index: true, element: <RegisterPage /> },
      {
        path: 'address',
        element: <RegisterAddressPage />,
      },
    ],
  },
] as RouteObject[];
