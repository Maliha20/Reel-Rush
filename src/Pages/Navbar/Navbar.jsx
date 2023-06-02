import React from 'react';
import logo from '../../assets/reel_rush-removebg-preview.png'
import { Link } from 'react-router-dom';
const Navbar = () => {

 return (
<div className="absolute max-w-screen-xl z-10 bg-opacity-5 navbar bg-base-100 ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      </ul>
    </div>
    <img className='w-64 h-18' src={logo} alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="text-2xl font-bold text-yellow-500 space-x-8 menu menu-horizontal px-1">
    <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn btn-ghost px-1 md:px-5 md:me-12 bg-yellow-500">Login</a>
  </div>
</div>
    );
};

export default Navbar;