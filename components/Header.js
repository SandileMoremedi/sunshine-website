import Link from "next/link";
import { useState } from "react";
import { useUser } from "@auth0/nextjs-auth0";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const { user, error, isLoading } = useUser();
  return (
    <header className="header">
      <nav className="nav">
        <span>
          <Link href="/">SCC</Link>
        </span>
        <div
          className={navbar ? "navbar open" : "navbar close"}
          onClick={() => {
            setNavbar(!navbar);
          }}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <div
          className={
            navbar ? "nav__linksAndButtons open" : "nav__linksAndButtons close"
          }
        >
          <ul className="ul">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/categories">Categories</Link>
            </li>
            <li>
              <Link href="/checkout">Checkout</Link>
            </li>
          </ul>
          <div className="log">
            {user ? (
              <Link href="/api/auth/logout">Logout</Link>
            ) : (
              <Link href="/api/auth/login">Login</Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
