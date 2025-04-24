import MainLayOut from '@layouts/Main/MainLayOut';
import About from '@pages/AboutUs/About';
import Cart from '@pages/Cart/Cart';
import Categories from '@pages/Categories/Categories';
import Error from '@pages/Error/Error';
import Home from '@pages/Home/Home';
import Login from '@pages/Login/Login';
import Products from '@pages/Products/Products';
import Register from '@pages/Register/Register';
import WishList from '@pages/wishList/WishList';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// layouts

// pages

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
        element: <WishList />,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
