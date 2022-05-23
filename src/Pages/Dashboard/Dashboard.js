import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col px-8">
        <Outlet />


      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-60 bg-base-300 text-base-content">
          <li><Link to="/dashboard/users">All Users</Link></li>
          <li><Link to="/dashboard/all-products">All Products</Link></li>
          <li><Link to="/dashboard/add-product">Add Products</Link></li>
        </ul>

      </div>
    </div>
  );
};

export default Dashboard;