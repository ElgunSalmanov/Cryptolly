import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Auth } from "../../api/auth";
import component from "../../assets/logo/component.svg";
import "./register.scss";

const Register = () => {
  const [showEye, setShowEye] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");

  // Auth.register({
  //   firstName,
  //   lastName,
  //   email,
  //   password,
  // });

  const validateFirstName = (firstName) => {
    if (
      !/^[A-Za-z\s]*$/.test(firstName.target.value) &&
      firstName.target.value !== ""
    ) {
      setFirstNameError("First name must contain only letters");
      setDisabled(true);
    } else if (
      firstName.target.value.length < 3 &&
      firstName.target.value !== ""
    ) {
      setFirstNameError("First name must be at least 3 characters");
      setDisabled(true);
    } else {
      setFirstNameError("");
      setDisabled(false);
    }

    setFirstName(firstName.target.value);
  };

  const validateLastName = (lastName) => {
    if (
      !/^[A-Za-z\s]*$/.test(lastName.target.value) &&
      lastName.target.value !== ""
    ) {
      setLastNameError("Last name must contain only letters");
      setDisabled(true);
    } else if (
      lastName.target.value.length < 6 &&
      lastName.target.value !== ""
    ) {
      setLastNameError("Last name must be at least 6 characters");
      setDisabled(true);
    } else {
      setLastNameError("");
      setDisabled(false);
    }

    setLastName(lastName.target.value);
  };

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
    if (
      email === "" ||
      password === "" ||
      firstName === "" ||
      lastName === "" ||
      emailError ||
      passwordError ||
      firstNameError ||
      lastNameError
    ) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [
    email,
    password,
    firstName,
    lastName,
    emailError,
    passwordError,
    firstNameError,
    lastNameError,
  ]);

  return (
    <div className="container">
      <div className="container-register">
        <div className="container-register-info">
          <img
            className="container-register-info-logo"
            src={component}
            alt="logo"
          />
          <p className="container-register-info-title">
            Let’s get started by filling out the form
          </p>
        </div>
        <form className="container-register-form">
          <div className="container-register-form-names">
            <div className="container-register-form-names-container">
              <input
                type="text"
                value={firstName}
                onChange={validateFirstName}
                className="container-register-form-names-container-first"
                placeholder="Enter your first name"
              />
              <div className="container-register-form-names-container-validations">
                <div className="container-register-form-names-container-validations-validation">
                  {firstNameError && (
                    <p className="container-register-form-names-container-validations-validation-text">
                      {firstNameError}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="container-register-form-names-container">
              <input
                type="text"
                value={lastName}
                onChange={validateLastName}
                className="container-register-form-names-container-last"
                placeholder="Enter your last name"
              />
              <div className="container-register-form-names-container-validations">
                <div className="container-register-form-names-container-validations-validation">
                  {lastNameError && (
                    <p className="container-register-form-names-container-validations-validation-text">
                      {lastNameError}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <input
            type="email"
            value={email}
            onChange={validateEmail}
            className="container-register-form-email"
            placeholder="Enter your email"
          />
          <div className="container-register-form-validations">
            <div className="container-register-form-validations-validation">
              {emailError && (
                <p className="container-register-form-validations-validation-text">
                  {emailError}
                </p>
              )}
            </div>
          </div>
          <div className="container-register-form-passblock">
            <input
              type={showEye ? "text" : "password"}
              value={password}
              onChange={validatePassword}
              className="container-register-form-passblock-password"
              placeholder="Enter your password"
            />
            <i
              className={`container-register-form-passblock-eye ${
                showEye ? "fa-regular fa-eye" : "fa-regular fa-eye-slash"
              }`}
              onClick={showPassword}
            ></i>
          </div>
          <div className="container-register-form-passblock-validations">
            <div className="container-register-form-passblock-validations-validation">
              {passwordError && (
                <p className="container-register-form-passblock-validations-validation-text">
                  {passwordError}
                </p>
              )}
            </div>
          </div>
          <div className="container-register-form-pass">
            <div className="container-register-form-pass-check">
              <input
                className="container-register-form-pass-check-checkbox"
                type="checkbox"
                name="checkbox"
              />
              <p
                htmlFor="checkbox"
                className="container-register-form-pass-check-remember"
              >
                I agree to the Terms and Conditions <br />
                and the Trading Risk Notice
              </p>
            </div>
          </div>
          <button
            disabled={disabled}
            type="submit"
            style={{
              background: disabled ? "#6d849e" : "#246cf9",
              cursor: disabled ? "not-allowed" : "pointer",
            }}
            className="container-register-signup"
          >
            Sign Up Now
          </button>
          <p className="container-register-sign">
            Already have an account?{" "}
            <Link to="/login" className="container-register-sign-link">
              Sign in now
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
