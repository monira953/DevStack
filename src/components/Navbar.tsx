import logo from "../assets/logo-text.png";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-base-100 shadow-sm">
      <div className="container mx-auto px-6">
        <div className="navbar relative p-0">

          {/* MOBILE HAMBURGER */}
          <div className="navbar-start lg:hidden">
            <div className="dropdown">

              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <svg
                  aria-label="Menu"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>

              <ul
                tabIndex={-1}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a href="/">Home</a>
                </li>

                <li>
                  <a href="#technologies">Technologies</a>
                </li>

                <li>
                  <a href="#projects">Projects</a>
                </li>

                <li>
                  <a href="#about">About</a>
                </li>

                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>

            </div>
          </div>

          {/* DESKTOP LOGO */}
          <div className="navbar-start hidden lg:flex">
            <a href="/">
              <img
                src={logo}
                alt="Dev Stack"
                className="w-24"
              />
            </a>
          </div>

          {/* MOBILE CENTER LOGO */}
          <div className="absolute left-1/2 -translate-x-1/2 lg:hidden">
            <a href="/">
              <img
                src={logo}
                alt="Dev Stack"
                className="w-20"
              />
            </a>
          </div>

          {/* DESKTOP NAVIGATION */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-2">

              <li>
                <a href="/" className="text-pink-500">
                  Home
                </a>
              </li>

              <li>
                <a href="#technologies">
                  Technologies
                </a>
              </li>

              <li>
                <a href="#projects">
                  Projects
                </a>
              </li>

              <li>
                <a href="#about">
                  About
                </a>
              </li>

              <li>
                <a href="#contact">
                  Contact
                </a>
              </li>

            </ul>
          </div>

          {/* RIGHT — AUTH */}
          <div className="navbar-end">

            <button className="btn btn-ghost btn-sm font-normal">
              Sign In
            </button>

            <button
              className="btn btn-sm border-0 text-white rounded-full"
              style={{
                backgroundImage: "var(--brand-gradient)",
              }}
            >
              Sign Up
            </button>

          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;