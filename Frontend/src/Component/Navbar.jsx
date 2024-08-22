import React, { useEffect, useState } from 'react';
import Mylogin from './Mylogin';
import { useAuth } from "../context/AuthProvider";
import Logout from './Logout';

function Navbar() {
  const [authUser, setAuthUser] = useAuth();
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navitem = (
    <>
      <li><a href="/">Home</a></li>
      <li><a href="/course">Course</a></li>
      <li><a href="/About">About</a></li>
      <li><a href="/Contact">Contact</a></li>
    </>
  );

  return (
    <div className={`fixed left-0 right-0 z-50 mx-5 ${sticky ? "sticky-navbar shadow-md bg-base-200 duration-300 transition-all ease-in-out" : ""}`}>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {navitem}
            </ul>
          </div>
          <a className="text-2xl font-bold cursor-pointer">BOOK-STORE</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navitem}
          </ul>
        </div>
        <div className="navbar-end">
          {authUser ? (
            <div>
              <Logout />
            </div>
          ) : (
            <div>
              <a
                className="bg-white text-black p-2 rounded-md cursor-pointer hover:bg-slate-500 duration-300"
                onClick={() => document.getElementById("my_modal_3")?.showModal()}
              >
                Login
              </a>
            </div>
          )}
          <Mylogin />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
