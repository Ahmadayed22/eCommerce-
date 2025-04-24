import { lazy } from 'react';

const About = lazy(() => import('@pages/AboutUs/About'));
const Cart = lazy(() => import('@pages/Cart/Cart'));
const Categories = lazy(() => import('@pages/Categories/Categories'));
const Error = lazy(() => import('@pages/Error/Error'));
const Home = lazy(() => import('@pages/Home/Home'));
const Login = lazy(() => import('@pages/Login/Login'));
const Products = lazy(() => import('@pages/Products/Products'));
const Register = lazy(() => import('@pages/Register/Register'));
const WishList = lazy(() => import('@pages/wishList/WishList'));

export {
  About,
  Cart,
  Categories,
  Error,
  Home,
  Login,
  Products,
  Register,
  WishList,
};
