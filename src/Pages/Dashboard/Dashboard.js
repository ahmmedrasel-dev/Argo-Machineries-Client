import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
  const [user] = useAuthState(auth)
  const [admin] = useAdmin(user)
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col px-8">
        <Outlet />


      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-60 bg-base-300 text-base-content">
          {/* Admin See Only */}
          {
            admin && <ul>
              <li><Link to="/dashboard/users">Manage Users</Link></li>
              <li><Link to="/dashboard/all-products">Manage Product Products</Link></li>
              <li><Link to="/dashboard/manageorder">Manage Orders</Link></li>
              <li><Link to="/dashboard/add-product">Add Products</Link></li>
            </ul>
          }

          {/* User See */}
          <li><Link to="/dashboard/myorders">My Orders</Link></li>
          <li><Link to="/dashboard/addreview">Add Review</Link></li>
        </ul>

      </div>
    </div>
  );
};

export default Dashboard;