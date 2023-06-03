import { useDispatch, useSelector } from "react-redux";
import LoginForm from "../LoginForm/LoginForm";
import { startSessionThunk } from "../../store/slice/authSlice";
import "./Login.css";
import { Navigate, useLocation } from "react-router-dom";

const Login = () => {
  const isLogged = useSelector((store) => store.auth.isLogged);
  const dispatch = useDispatch();
  const location = useLocation();
  const from = location.state?.from;

  const handleLogin = (loginData) => {
    dispatch(startSessionThunk(loginData));
  };
  return (
    <div className="login__container">
      <section className="welcome__container">
        <p>Welcome! Enter your email and password to continue</p>
      </section>
      <section>
        <LoginForm onLogin={handleLogin} />
      </section>

      {isLogged && <Navigate to={from ?? "/"} />}
    </div>
  );
};

export default Login;
