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
          onClick={() => {
            signInWithPopup(getAuth(app), provider);
          }}
        >
          Login with Google
        </button>
      </div>
    </>
  );
};

export default Authentication;
