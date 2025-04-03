import { Badge } from 'flowbite-react';
import { Navbar, NavbarCollapse, NavbarToggle } from 'flowbite-react';
import { Link } from 'react-router-dom';
import HeaderBasket from '../../components/ecommerce/HeaderBasket/HeaderBasket';

const Header = () => {
  return (
    <div className="container mx-auto py-5">
      <div className="flex justify-between">
        {/* logo */}
        <h1 className="flex items-center">
          <span className="text-4xl">Ayed</span>
          <Badge className="w-fit text-3xl">Ecommerce</Badge>
        </h1>
        {/* busket */}
        <HeaderBasket />
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
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
