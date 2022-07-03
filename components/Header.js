import Link from "next/link";
import { useState, useEffect } from "react";
import { ProductsContext } from "./ProductsProvider";
import { useContext } from "react";
import Image from "next/image";
import { FaExclamationCircle } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { app } from "../firebaseConfig";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const { state, dispatch } = useContext(ProductsContext);
  const provider = new GoogleAuthProvider();

  useEffect(() => {
    onAuthStateChanged(getAuth(app), (authUser) => {
      if (authUser) {
        dispatch({
          type: "LOGGED_IN",
          payload: authUser,
        });
      } else {
        dispatch({
          type: "LOGGED_OUT",
        });
      }
    });
  }, [dispatch]);

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
          <ul
            className="ul"
            onClick={() => {
              setNavbar(false);
            }}
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li className="ul__categories">
              <Link href="/categories">Categories</Link>
              <div className="ul__categories__links">
                <Link href="/categories/dairy">Fruit</Link>
                <Link href="/categories/dairy">Bakery</Link>
                <Link href="/categories/dairy">Dairy</Link>
                <Link href="/categories/dairy">Meat</Link>
                <Link href="/categories/dairy">Ready Meals</Link>
                <Link href="/categories/dairy">Frozen Food</Link>
                <Link href="/categories/dairy">Snack</Link>
                <Link href="/categories/dairy">Beverages</Link>
                <Link href="/categories/dairy">Alcohol</Link>
                <Link href="/categories/dairy">Cleaning</Link>
                <Link href="/categories/dairy">Health</Link>
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
            {state.user ? (
              <div className="log__details">
                <div className="image">
                  <Image
                    src={state.user.photoURL}
                    layout="fill"
                    objectFit="cover"
                    alt="Profile"
                  />
                </div>
                <button>
                  <IoIosArrowDown />
                </button>
                <div className="log__details__hover">
                  <button
                    onClick={() =>
                      signOut(getAuth(app)).then(() => {
                        dispatch({
                          type: "LOGGING_OUT",
                        });
                      })
                    }
                  >
                    <span>
                      <FaExclamationCircle />
                      Logout
                    </span>
                  </button>
                </div>
              </div>
            ) : (
              <Link href="auth" className="loginButton">
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
