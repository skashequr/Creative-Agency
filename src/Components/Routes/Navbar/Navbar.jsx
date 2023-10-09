import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";


const Navbar = () => {
    const [openNav, setOpenNav] = useState(false);
    const {user,logOut} = useContext(AuthContext)
    console.log(user)
    const signOut = ()=>{
      logOut()
      
    }
    const navList = (
      <ul className="mb-4 mt-2 flex flex-col gap-2 text-inherit lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "rounded-md bg-black p-2 text-white"
              : "text-white"
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "rounded-md bg-black p-2 text-white"
              : "text-white"
          }
          to="/profile"
        >
          Profile
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "rounded-md bg-black p-2 text-white"
              : "text-white"
          }
          to="/testimonials"
        >
          Contect
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "rounded-md bg-black p-2 text-white"
              : "text-white"
          }
          to="/sign-up"
        >
          Support
        </NavLink>
     
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "rounded-md bg-black p-2 text-white"
              : "text-white"
          }
          to="/signup"
        >
          Sign Up
        </NavLink>
      
        
      </ul>
      
    );
     
      
    return (
        <div>
          {
            user?.email?
            
            <div className="navbar bg-base-100">
            <div className="flex-1">
              <img className="h-24 w-24" src="https://i.ibb.co/D5gnGYw/image.png" alt="" />
            </div>
            <div className="flex-none">
             
            <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img className="rounded-full h-full w-full" src={user?.photoURL} />
                  </div>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li><a>Settings</a></li>
                  <li><Link onClick={signOut}>Logout</Link></li>
                </ul>
              </div>
            </div>
                        </div>
                        : " "
          }
          <div className="navbar bg-[#543E93]">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navList}
              
            </ul>
          </div>
          <p className=" normal-case text-white text-xl">{user?user.displayName : "Creative Agency"}</p>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navList}
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="/login" className="btn">Login</Link>
        </div>
      </div>

   
        </div>
    );
  }

export default Navbar;











