import { Link, NavLink } from "react-router-dom";
import { FaBlog } from "react-icons/fa6";
const Navbar = () => {
  const handleNavClick = () => {
    // Close dropdown by removing focus from the dropdown trigger
    const elem = document.activeElement;
    if (elem) {
      elem?.blur();
    }
  };

  const navLinks = (
    <>
      <li onClick={handleNavClick}>
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

      <li onClick={handleNavClick}>
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

      <li onClick={handleNavClick}>
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
    <div className="navbar sticky top-0 z-50 bg-linear-to-r from-indigo-50 via-purple-50 to-blue-50 shadow-md border-b border-indigo-100">
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
          <div className="flex items-center gap-0.5 px-3 py-2 rounded-lg transition-all duration-300 group-hover:bg-white/60">
            <FaBlog className="w-8 h-8 text-indigo-600 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-4xl font-bold tracking-tight bg-linear-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              logIt
            </span>
          </div>
        </Link>
      </div>
      <div className="navbar-end">
        <ul className="menu menu-horizontal gap-2 px-1 hidden lg:flex">
          {navLinks}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
