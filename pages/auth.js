import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { FaGoogle } from "react-icons/fa";
import { useEffect, useState } from "react";
import { app } from "../firebaseConfig";

import FormInputs from "../components/FormInputs";
import Image from "next/image";
const Authentication = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const provider = new GoogleAuthProvider();
  const [loggingIn, setLoggingIn] = useState(false);
  const handleChange = (type, e) => {
    if (type == "email") {
      setEmail(e.target.value);
    }

    if ((type = "text")) {
      setName(e.target.value);
    }

    if ((type = "email")) {
      setEmail(e.target.value);
    }
  };

  return (
    <>
      <h1>Login / Sign In</h1>
      <div className="loginOptions">
        <div className="loginPage">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              signInWithEmailAndPassword(getAuth, email, password);
            }}
          >
            <FormInputs
              placeholder="e.g Sunshine Customer"
              id="name"
              name="Name and Surname:"
              inputType="name"
              type="text"
              pattern="^[A-Za-z0-9]{4,20}$"
              errorMessage="Must contain at least 4 to 20 characters"
              handleChange={handleChange}
              label="Please Add Your Name and Surname"
            />
            <FormInputs
              placeholder="e.g email@gmail.com"
              id="email"
              name="Email:"
              setEmail={setEmail}
              pattern="^[A-Za-z0-9]{4,20}$"
              errorMessage="Must contain at least 4 to 20 characters"
              inputType="email"
              type="email"
              handleChange={handleChange}
              label="Please add your email"
            />
            <FormInputs
              placeholder="e.g Book12567"
              id="password"
              name="Password:"
              setPassword={setPassword}
              pattern="^[A-Za-z0-9]{4,20}$"
              inputType="password"
              errorMessage="Must contain at least 4 to 20 characters"
              type="password"
              handleChange={handleChange}
              label="please add a password"
            />
            <button className="submit" type="submit">
              Submit
            </button>
          </form>
        </div>
        <div className="orDiv">
          <div className="aside-left"></div>
          <span className="orBtn">OR</span>
          <div className="aside-right"></div>
        </div>
        <button
          className="google"
          disabled={loggingIn ? true : false}
          onClick={async () => {
            setLoggingIn(true);
            await signInWithPopup(getAuth(app), provider)
              .then(() => setLoggingIn(true), (window.location = "/"))
              .catch((err) => console.log(err));
          }}
        >
          <Image
            src="/Google__G__Logo.svg.png"
            alt="Google Logo"
            height="25"
            width="25"
          />
          <span>Login with Google</span>
        </button>
      </div>
    </>
  );
};

export default Authentication;
