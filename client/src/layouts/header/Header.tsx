import { Badge, Dropdown, DropdownHeader, DropdownItem } from 'flowbite-react';
import { Navbar, NavbarCollapse, NavbarToggle } from 'flowbite-react';
import { Link, useNavigate } from 'react-router-dom';
import HeaderBasket from '@components/ecommerce/HeaderBasket/HeaderBasket';
import { HeaderWishlist } from '@components/ecommerce';
import { useAppDispatch, useAppSelector } from '@store/reduxHooks';
import { authLogout } from '@store/auth/authSlice';
import { useEffect } from 'react';
import { thunkGetWishList } from '@store/wishlist/wishlistSlice';
import { cleanUpCartItems } from '@store/cart/cartSlice';

const Header = () => {
  const { userInfo, accessToken } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navagate = useNavigate();
  const handelLogout = () => {
    dispatch(authLogout());
    dispatch(cleanUpCartItems());
    navagate('/');
  };

  useEffect(() => {
    if (accessToken) {
      dispatch(thunkGetWishList('ProductIds'));
    }
  }, [dispatch, accessToken]);

  return (
    <div className="container mx-auto py-5">
      <div className="flex justify-between">
        {/* logo */}
        <h1 className="flex items-center">
          <span className="text-4xl">Ayed</span>
          <Badge className="w-fit text-3xl">Ecommerce</Badge>
        </h1>
        {/* busket */}
        <div className="flex items-center justify-around gap-x-3">
          <HeaderWishlist />
          <HeaderBasket />
        </div>
      </div>
      {/* navBar */}
      <div className="py-4">
        <Navbar fluid rounded>
          <NavbarToggle />
          <NavbarCollapse>
            <Link
              to="/"
              className="block px-3 py-2 text-gray-200 hover:text-cyan-400 rounded"
            >
              Home
            </Link>

            <Link
              to="/categories"
              className="block px-3 py-2 text-gray-200 hover:text-cyan-400  rounded"
            >
              Categories
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-gray-200 hover:text-cyan-400  rounded"
            >
              About
            </Link>
          </NavbarCollapse>

          {accessToken ? (
            <Dropdown
              label={
                <span className="cursor-pointer text-white font-semibold">
                  Welcome
                </span>
              }
              inline
            >
              <DropdownHeader>
                <span className="block text-sm">
                  {userInfo?.firstName} {userInfo?.lastName}
                </span>
                <span className="block truncate text-sm font-medium">
                  {userInfo?.email}
                </span>
              </DropdownHeader>
              <DropdownItem as={Link} to={'/profile'}>
                Profile
              </DropdownItem>
              <DropdownItem as={Link} to={'profile/orders'}>
                orders
              </DropdownItem>
              <DropdownItem onClick={handelLogout}>Sign out</DropdownItem>
            </Dropdown>
          ) : (
            <NavbarCollapse>
              <Link
                to="/login"
                className="block px-3 py-2 text-gray-200 hover:text-cyan-400  rounded"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="block px-3 py-2 text-gray-200 hover:text-cyan-400  rounded"
              >
                Register
              </Link>
            </NavbarCollapse>
          )}
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
