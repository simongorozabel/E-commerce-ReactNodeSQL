import { useSelector } from "react-redux";
import SignupForm from "../../components/SignupForm/SignupForm";
import { useState } from "react";

import { Navigate, useLocation } from "react-router-dom";

import { signUp } from "../../services/auth/signup";

import "./Signup.css";

const SignUp = () => {
  const isLogged = useSelector((store) => store.auth.isLogged);
  const location = useLocation();
  const from = location.state?.from;

  const [signingUp, setSigningUp] = useState(false);

  const handleSignUp = (signUpData) => {
    setSigningUp(true);
    signUp(signUpData);

    setTimeout(() => (window.location.href = "/login"), 10000);
  };
  return (
    <div className="login__container">
      <section className="welcome__container">
        <div>
          <h3 className="login__h3">Create your account</h3>
        </div>
        <div>to continue.</div>
      </section>
      <section className="loginForm__container">
        <SignupForm onSignUp={handleSignUp} />
      </section>

      {isLogged && <Navigate to={from ?? "/"} />}

      {signingUp && (
        <div className="signinUpMessage">
          <p>
            We are sending a confirmation email, please <b>check your email</b>{" "}
            to continue...
          </p>
          <em>
            If you haven&#39;t received an email yet, <b>check spam</b>.
          </em>
        </div>
      )}
    </div>
  );
};

export default SignUp;
