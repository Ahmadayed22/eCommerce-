import MainLayOut from '@layouts/Main/MainLayOut';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import * as Pages from './lazyLoading';
import { Suspense } from 'react';
// layouts
const {
  About,
  Cart,
  Categories,
  Error,
  Home,
  Login,
  Products,
  Register,
  WishList,
  ProfileLayout,
  // Profile,
  Account,
  Orders,
} = Pages;
// pages
import ProtectedRoute from '@components/Auth/ProtectedRoute';
import { LottieHandler } from '@components/feedbaks';
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayOut />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'categories',
        element: <Categories />,
      },
      {
        path: 'categories/products/:prefix',
        element: <Products />,
        loader: ({ params }) => {
          if (
            typeof params.prefix !== 'string' ||
            !/^[a-z]+$/i.test(params.prefix)
          ) {
            throw new Response('Bad Request', {
              statusText: 'Category not found',
              status: 400,
            });
          }
          return true;
        },
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'wishlist',
        element: (
          <ProtectedRoute>
            <WishList />
          </ProtectedRoute>
        ),
      },
      {
        path: 'profile',
        element: (
          <ProtectedRoute>
            <ProfileLayout />
          </ProtectedRoute>
        ),
        children: [
          {
            index: true,
            element: <Account />,
          },
          {
            path: 'orders',
            element: <Orders />,
          },
        ],
      },
    ],
  },
]);

const AppRouter = () => {
  return (
    <Suspense
      fallback={<LottieHandler type="loading" message="Loading Pleas Wait" />}
    >
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default AppRouter;
