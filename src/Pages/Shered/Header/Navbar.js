import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png"

const Navbar = () => {
  const navItem = <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/appoinment'>Machineries</Link></li>
    <li><Link to='/review'>Review</Link></li>
    <li><Link to='/blog'>Blog</Link></li>
    {/* {user && <li><Link to='/dashboard'>Dashboard</Link></li>}
    <li>{user ? <button onClick={signout} className="btn btn-ghost">Sign out</button> : <Link to='/login'>Login</Link>}</li> */}
  </>

  return (
    <div className="navbar max-w-7xl mx-auto">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {navItem}
            </ul>
          </div>
          <Link to='/'><img className="w-28" src={logo} alt="logo" /></Link>
        </div>
        <div className="flex-non">
          <div className=" hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
              {navItem}
            </ul>
          </div>
          <div className="navbar-end dropdown dropdown-end">
            <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://api.lorem.space/image/face?hash=33791" alt="" />
              </div>
            </label>
            <ul tabIndex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <Link to='profile' className="justify-between">
                  Profile
                </Link>
              </li>
              <li><Link to='signout'>Logout</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
