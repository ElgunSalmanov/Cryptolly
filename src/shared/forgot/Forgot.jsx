import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import component from "../../assets/logo/component.svg";
import "./forgot.scss";

function ForgotPassword() {
  const [showEye, setShowEye] = useState(false);
  const [newShowEye, setNewShowEye] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [newPasswordError, setNewPasswordError] = useState("");

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

  const validateNewPassword = (newPassword) => {
    if (newPassword.target.value.includes(" ")) {
      setNewPasswordError("Password cannot contain spaces");
      setDisabled(true);
    } else if (
      !/[!@#$%^&*]/.test(newPassword.target.value) &&
      newPassword.target.value !== ""
    ) {
      setNewPasswordError(
        "Password must contain at least one special character"
      );
      setDisabled(true);
    } else if (
      newPassword.target.value.length < 6 &&
      newPassword.target.value !== ""
    ) {
      setNewPasswordError("Password must be at least 6 characters");
      setDisabled(true);
    } else {
      setNewPasswordError("");
      setDisabled(false);
    }

    setNewPassword(newPassword.target.value);
  };

  const showPassword = () => {
    setShowEye(!showEye);
  };

  const showNewPassword = () => {
    setNewShowEye(!newShowEye);
  };

  useEffect(() => {
    if (
      email === "" ||
      password === "" ||
      newPassword === "" ||
      emailError ||
      passwordError ||
      newPasswordError
    ) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [disabled, email, password, newPassword]);

  return (
    <div className="container">
      <div className="container-forgot">
        <div className="container-forgot-info">
          <img
            className="container-forgot-info-logo"
            src={component}
            alt="logo"
          />
          <p className="container-forgot-info-title">
            Reset your Cryptolly password!
          </p>
        </div>
        <form className="container-forgot-form">
          <input
            type="email"
            value={email}
            onChange={validateEmail}
            className="container-forgot-form-email"
            placeholder="Enter email address"
          />
          <div className="container-forgot-form-validations">
            <div className="container-forgot-form-validations-validation">
              {emailError && (
                <p className="container-forgot-form-validations-validation-text">
                  {emailError}
                </p>
              )}
            </div>
          </div>
          <div className="container-forgot-form-passblock">
            <input
              type={showEye ? "text" : "password"}
              value={password}
              onChange={validatePassword}
              className="container-forgot-form-passblock-password"
              placeholder="Enter new password"
            />
            <i
              className={`container-forgot-form-passblock-eye ${
                showEye ? "fa-regular fa-eye" : "fa-regular fa-eye-slash"
              }`}
              onClick={showPassword}
            ></i>
          </div>
          <div className="container-forgot-form-passblock-validations">
            <div className="container-forgot-form-passblock-validations-validation">
              {passwordError && (
                <p className="container-forgot-form-passblock-validations-validation-text">
                  {passwordError}
                </p>
              )}
            </div>
          </div>
          <div className="container-forgot-form-passblock">
            <input
              type={newShowEye ? "text" : "password"}
              value={newPassword}
              onChange={validateNewPassword}
              className="container-forgot-form-passblock-password"
              placeholder="Enter confirm new password"
            />
            <i
              className={`container-forgot-form-passblock-eye ${
                newShowEye ? "fa-regular fa-eye" : "fa-regular fa-eye-slash"
              }`}
              onClick={showNewPassword}
            ></i>
          </div>
          <div className="container-forgot-form-passblock-validations">
            <div className="container-forgot-form-passblock-validations-validation">
              {newPasswordError && (
                <p className="container-forgot-form-passblock-validations-validation-text">
                  {newPasswordError}
                </p>
              )}
            </div>
          </div>
          <button
            disabled={disabled}
            type="submit"
            style={{
              background: disabled ? "#6d849e" : "#246cf9",
              cursor: disabled ? "not-allowed" : "pointer",
            }}
            className="container-forgot-change"
          >
            Change
          </button>
          <p className="container-forgot-remember">
            Remember your password?{" "}
            <Link to="/login" className="container-forgot-remember-link">
              Back to Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
