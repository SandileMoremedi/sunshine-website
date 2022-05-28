import Link from "next/link";
import { useState } from "react";
import { useUser } from "@auth0/nextjs-auth0";
import { ProductsContext } from "./ProductsProvider";
import { useContext } from "react";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const { user, error, isLoading } = useUser();
  const { state } = useContext(ProductsContext);

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
            <li className="ul__categories">
              <Link href="/categories">Categories</Link>
              <div className="ul__categories__links">
                <Link href="/categories/dairy">Fruit & Veg</Link>
                <Link href="/categories/dairy">Bakery</Link>
                <Link href="/categories/dairy">Milk, Dairy & Eggs</Link>
                <Link href="/categories/dairy">Meat, Poultry & Seafood</Link>
                <Link href="/categories/dairy">Ready Meals, Deserts</Link>
                <Link href="/categories/dairy">Frozen Food</Link>
                <Link href="/categories/dairy">Chocolate, Chips & Snacks</Link>
                <Link href="/categories/dairy">Beverages</Link>
                <Link href="/categories/dairy">Alcohol</Link>
                <Link href="/categories/dairy">Household & Cleaning</Link>
                <Link href="/categories/dairy">Personal Care & Health</Link>
                <Link href="/categories/dairy">Baby</Link>
                <Link href="/categories/dairy">Pet Care</Link>
              </div>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li className="ul__link">
              <Link href="/checkout" className="ul__checkout">
                Checkout
              </Link>
              {state.products !== 0 && (
                <span className="ul__checkout__icon">{state.products}</span>
              )}
            </li>
            <li>
              <Link href="/contact">Contact</Link>
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
