import { Link, NavLink } from "react-router-dom";
import { PenLine } from "lucide-react";
const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending opacity-50"
              : isActive
              ? "bg-primary text-primary-content font-semibold"
              : "hover:bg-base-200"
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/blogs"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending opacity-50"
              : isActive
              ? "bg-primary text-primary-content font-semibold"
              : "hover:bg-base-200"
          }
        >
          Blogs
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending opacity-50"
              : isActive
              ? "bg-primary text-primary-content font-semibold"
              : "hover:bg-base-200"
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <Link to="/" className="flex items-center gap-2 group">
          <PenLine
            size={28}
            className="text-indigo-600 stroke-2 transition-colors duration-300 group-hover:text-indigo-700"
            fill="none"
          />
          <span className="text-2xl font-bold tracking-tight bg-linear-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent transition-all duration-300 group-hover:from-indigo-700 group-hover:via-purple-700 group-hover:to-blue-700 italic">
            My Blog
          </span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2 px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Login</a>
      </div>
    </div>
  );
};

export default Navbar;
