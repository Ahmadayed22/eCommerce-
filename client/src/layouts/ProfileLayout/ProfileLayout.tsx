import { NavLink, Outlet } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'flowbite-react';
const ProfileLayout = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="md:w-1/4">
        <ListGroup>
          <ListGroupItem>
            <NavLink
              to=""
              end
              className={({ isActive }) =>
                `block px-4 py-2 rounded ${
                  isActive
                    ? 'bg-blue-100 text-blue-700 font-semibold'
                    : 'hover:bg-gray-100'
                }`
              }
            >
              Account Info
            </NavLink>
          </ListGroupItem>
          <ListGroupItem>
            <NavLink
              to="orders"
              className={({ isActive }) =>
                `block px-4 py-2 rounded ${
                  isActive
                    ? 'bg-blue-100 text-blue-700 font-semibold'
                    : 'hover:bg-gray-100'
                }`
              }
            >
              Orders
            </NavLink>
          </ListGroupItem>
        </ListGroup>
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default ProfileLayout;
