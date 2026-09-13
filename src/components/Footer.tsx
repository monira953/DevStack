import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content">
      <div className="container mx-auto px-6 py-12">

        {/* Top section */}
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">

          {/* Brand */}
          <div className="max-w-sm">
            <h2
              className="text-2xl font-bold text-transparent bg-clip-text"
              style={{
                backgroundImage: "var(--brand-gradient)",
              }}
            >
              Dev Stack
            </h2>

            <p className="mt-3 text-sm leading-6 text-base-content/60">
              Discover modern technologies and build the perfect stack
              for your next development project.
            </p>

            {/* Socials */}
            <div className="mt-5 flex gap-2">
              <a
                href="#"
                aria-label="GitHub"
                className="btn btn-circle btn-sm btn-ghost border border-base-content/10"
              >
                <FaGithub className="text-lg" />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="btn btn-circle btn-sm btn-ghost border border-base-content/10"
              >
                <FaXTwitter className="text-lg" />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="btn btn-circle btn-sm btn-ghost border border-base-content/10"
              >
                <FaLinkedinIn className="text-lg" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-x-16 gap-y-8 sm:grid-cols-3">

            <nav className="flex flex-col gap-3">
              <h6 className="footer-title opacity-100">
                Product
              </h6>
              <a href="#technologies" className="link link-hover text-sm">
                Technologies
              </a>
              <a href="#stack" className="link link-hover text-sm">
                Your Stack
              </a>
              <a href="#" className="link link-hover text-sm">
                Projects
              </a>
            </nav>

            <nav className="flex flex-col gap-3">
              <h6 className="footer-title opacity-100">
                Company
              </h6>
              <a href="#" className="link link-hover text-sm">
                About
              </a>
              <a href="#" className="link link-hover text-sm">
                Contact
              </a>
              <a href="#" className="link link-hover text-sm">
                Careers
              </a>
            </nav>

            <nav className="flex flex-col gap-3">
              <h6 className="footer-title opacity-100">
                Legal
              </h6>
              <a href="#" className="link link-hover text-sm">
                Privacy
              </a>
              <a href="#" className="link link-hover text-sm">
                Terms
              </a>
              <a href="#" className="link link-hover text-sm">
                Cookies
              </a>
            </nav>

          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-3 border-t border-base-content/10 pt-6 text-sm text-base-content/50 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex gap-5">
            <a href="#" className="link link-hover">
              Privacy
            </a>
            <a href="#" className="link link-hover">
              Terms
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;