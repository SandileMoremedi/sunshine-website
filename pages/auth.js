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
              setName={setName}
              pattern="^[A-Za-z0-9]{4,20}$"
              errorMessage="Must contain at least 4 to 20 characters"
            />
            <FormInputs
              placeholder="e.g email@gmail.com"
              id="email"
              name="Email:"
              setEmail={setEmail}
              pattern="^[A-Za-z0-9]{4,20}$"
              errorMessage="Must contain at least 4 to 20 characters"
            />
            <FormInputs
              placeholder="e.g Book12567"
              id="password"
              name="Password:"
              setPassword={setPassword}
              pattern="^[A-Za-z0-9]{4,20}$"
              errorMessage="Must contain at least 4 to 20 characters"
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
          onClick={async () => {
            await signInWithPopup(getAuth(app), provider);
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
