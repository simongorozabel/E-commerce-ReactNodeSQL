import { useId, useState } from "react";
import "./SignupForm.css";
const SignUpForm = ({ onSignUp }) => {
  const nameId = useId();
  const passwordId = useId();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    const newFormData = { ...formData, [name]: value };

    setFormData(newFormData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password || !formData.phone) return;

    onSignUp(formData);
  };

  return (
    <form className="form__container" onSubmit={handleSubmit}>
      <div className="labelInput__nameContainer">
        <div className="labelInput__name">
          <label htmlFor={nameId}>First Name</label>
          <input
            type="text"
            value={formData.firstName}
            onChange={handleChange}
            id={nameId}
            name="firstName"
            required
          />
        </div>
        <div className="labelInput__name">
          <label htmlFor={nameId}>Last Name</label>
          <input
            type="text"
            value={formData.lastName}
            onChange={handleChange}
            id={nameId}
            name="lastName"
            required
          />
        </div>
      </div>
      <div className="labelInput__container">
        <label htmlFor={nameId}>Phone</label>
        <input
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          id={nameId}
          name="phone"
          required
        />
      </div>
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
            style={{ cursor: "pointer" }}
            type="button"
            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
          >
            <i className="bx  bx-show"></i>
          </button>
        </div>
      </div>
      <button className="form__button">Sign-up</button>
      <div className="signin__link">
        already a user? <a href="/login">Login</a>
      </div>
    </form>
  );
};

export default SignUpForm;
