import React from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png"
import auth from "../../../firebase.init";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const signout = () => {
    signOut(auth)
    localStorage.removeItem('accessToken')
  }
  const navItem = <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/all-machinaries'>Machineries</Link></li>
    <li><Link to='/review'>Review</Link></li>
    <li><Link to='/blog'>Blog</Link></li>
    <li><Link to='/myportfolio'>Portfolio</Link></li>
    <li>{!user && <Link to='/signin'>SignIn</Link>}</li>

  </>

  return (
    <div className="navbar w-full lg:max-w-7xl mx-auto">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {navItem}
            </ul>
          </div>
          <Link to='/'><img className="w-28 ml-12 lg:ml-0" src={logo} alt="logo" /></Link>
        </div>
        <div className="flex-non">
          <div className=" hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
              {navItem}
            </ul>
          </div>
          <div className="navbar-end dropdown dropdown-end">
            {
              user &&
              <div>
                <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src="https://api.lorem.space/image/face?hash=33791" alt="" />
                  </div>
                </label>
                < ul tabIndex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                  <li>
                    <Link to='/dashboard/myprofile' className="justify-between">{user.displayName}</Link>
                    <Link to='dashboard' className="justify-between hidden lg:block">Dashboard</Link>
                    <label htmlFor="my-drawer-2" className="justify-between lg:hidden">Dashboard</label>
                    <button onClick={signout}>Sign Out</button>
                  </li>
                </ul>
              </div>
            }

          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
