import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import component from "../../assets/logo/component.svg";
import google from "../../assets/icons/google.svg";
import vector from "../../assets/images/vector.svg";
import "./login.scss";

function Login() {
  const [showEye, setShowEye] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateEmail = (email) => {
    if (!/\S+@\S+\.\S+/.test(email.target.value) && email.target.value !== "") {
      setEmailError("Invalid email address");
      setDisabled(true);
    } else {
      setEmailError("");
      setDisabled(false);
    }

    setEmail(email.target.value);
  };

  const validatePassword = (password) => {
    if (password.target.value.includes(" ")) {
      setPasswordError("Password cannot contain spaces");
      setDisabled(true);
    } else if (
      !/[!@#$%^&*]/.test(password.target.value) &&
      password.target.value !== ""
    ) {
      setPasswordError("Password must contain at least one special character");
      setDisabled(true);
    } else if (
      password.target.value.length < 6 &&
      password.target.value !== ""
    ) {
      setPasswordError("Password must be at least 6 characters");
      setDisabled(true);
    } else {
      setPasswordError("");
      setDisabled(false);
    }

    setPassword(password.target.value);
  };

  const showPassword = () => {
    setShowEye(!showEye);
  };

  useEffect(() => {
    if (email === "" || password === "" || emailError || passwordError) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [email, password, emailError, passwordError]);

  return (
    <div className="container">
      <div className="container-login">
        <div className="container-login-info">
          <img
            className="container-login-info-logo"
            src={component}
            alt="logo"
          />
          <p className="container-login-info-title">
            Welcome back! Login to Cryptolly
          </p>
        </div>
        <button className="container-login-button">
          <img
            className="container-login-button-logo"
            src={google}
            alt="google"
          />
          Log in with Google
        </button>
        <div className="container-login-vector">
          <img
            className="container-login-vector-image"
            src={vector}
            alt="vector"
          />
        </div>
        <form className="container-login-form">
          <input
            type="email"
            value={email}
            onChange={validateEmail}
            className="container-login-form-email"
            placeholder="Enter your email address"
          />
          <div className="container-login-form-validations">
            <div className="container-login-form-validations-validation">
              {emailError && (
                <p className="container-login-form-passblock-validations-validation-text">
                  {emailError}
                </p>
              )}
            </div>
          </div>
          <div className="container-login-form-passblock">
            <input
              type={showEye ? "text" : "password"}
              value={password}
              onChange={validatePassword}
              className="container-login-form-passblock-password"
              placeholder="Enter your password"
            />
            <i
              className={`container-login-form-passblock-eye ${
                showEye ? "fa-regular fa-eye" : "fa-regular fa-eye-slash"
              }`}
              onClick={showPassword}
            ></i>
          </div>
          <div className="container-login-form-passblock-validations">
            <div className="container-login-form-passblock-validations-validation">
              {passwordError && (
                <p className="container-login-form-passblock-validations-validation-text">
                  {passwordError}
                </p>
              )}
            </div>
          </div>
          <div className="container-login-form-pass">
            <div className="container-login-form-pass-check">
              <input
                className="container-login-form-pass-check-checkbox"
                type="checkbox"
                name="checkbox"
              />
              <p className="container-login-form-pass-check-remember">
                Remember password
              </p>
            </div>
            <Link to="/forgot" className="container-login-form-pass-forgot">
              Forgot password
            </Link>
          </div>
          <button
            disabled={disabled}
            type="submit"
            style={{
              background: disabled ? "#6d849e" : "#246cf9",
              cursor: disabled ? "not-allowed" : "pointer",
            }}
            className="container-login-sign"
          >
            Sign In Now
          </button>
          <p className="container-login-signup">
            Haven’t an account?{" "}
            <Link to="/register" className="container-login-signup-link">
              Sign up for free
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
