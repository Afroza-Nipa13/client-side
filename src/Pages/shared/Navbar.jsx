import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../../Provider/AuthContext';
import Swal from 'sweetalert2';

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate()

  const handleSignOut = () => {
    signOutUser().then(() => {
      console.log('user signed out successfully')
       const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                });
                Toast.fire({
                    icon: "success",
                    title: "User Signed Out successfully"
                });
      navigate('/')
    }).catch((error) => {
      console.log(error)
    })
  }

  const links = <>

    <li><NavLink>Home</NavLink></li>
    <li><NavLink>About Us</NavLink></li>
    <li><NavLink>Contact Us</NavLink></li>
    {
      user && <>
        <li><NavLink to='/myApplications'>My Applications</NavLink></li>
        
        </>
    }
  </>
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className='flex justify-around gap-3'>
          {links}
        </ul>


      </div>
      <div className="navbar-end">

        {
          user ? <div>
            <button onClick={handleSignOut} className="btn">SignOut</button>
          </div>
            :
            <>
              <NavLink to='/register' className="btn">Register</NavLink>
              <NavLink to='/signin' className="btn">Sign In</NavLink>

            </>
        }

      </div>
    </div>
  );
};

export default Navbar;