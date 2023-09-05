import { useId, useState } from "react";
import "./LoginForm.css";
const LoginForm = ({ onLogin }) => {
  const nameId = useId();
  const passwordId = useId();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;

    const newFormData = { ...formData, [name]: value };

    setFormData(newFormData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) return;

    onLogin(formData);
  };

  return (
    <form className="form__container" onSubmit={handleSubmit}>
      <div className="labelInput__container">
        <label htmlFor={nameId}>Email</label>
        <input
          type="email"
          value={formData.email}
          onChange={handleChange}
          id={nameId}
          name="email"
          required
        />
      </div>
      <div className="labelInput__container">
        <label htmlFor={passwordId}>Password</label>
        <div className="passwordInput__container">
          <input
            type={isPasswordVisible ? "text" : "password"}
            value={formData.password}
            onChange={handleChange}
            id={nameId}
            name="password"
            required
          />

          <button
            type="button"
            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
          >
            <i className="bx  bx-show"></i>
          </button>
        </div>
      </div>
      <button className="form__button">Login</button>
      <div className="signin__link">
        not a user? <a href="/signin">Sign-in</a>
      </div>
    </form>
  );
};

export default LoginForm;
