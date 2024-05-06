import { useState } from "react";
import icon from "../../assets/icons/icon.svg";
import user from "../../assets/icons/user.svg";
import crypto from "../../assets/icons/crypto.svg";
import crypto1 from "../../assets/icons/crypto1.svg";
import crypto2 from "../../assets/icons/crypto2.svg";
import ellipse from "../../assets/icons/ellipse.svg";
import arrow from "../../assets/icons/down.svg";
import calendar from "../../assets/icons/calendar.svg";
import "./settings.scss";

function Settings() {
  const [name, setName] = useState("John");
  const [surname, setSurname] = useState("Doe");
  const [email, setEmail] = useState("johndoe123@gmail.com");
  const [image, setImage] = useState(user);
  const [time, setTime] = useState("2022-10-21");

  const changeImage = (image) => {
    const file = image.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result);
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="settings">
      <div className="settings-headline">
        <img className="settings-headline-icon" src={icon} alt="icon" />
        <div className="settings-headline-box">
          <h2 className="settings-headline-box-title">Profile and Settings</h2>
          <p className="settings-headline-box-text">Setup your profile</p>
        </div>
      </div>
      <div className="settings-container">
        <div className="settings-container-profile">
          <div className="settings-container-profile-data">
            <img
              className="settings-container-profile-data-image"
              src={image}
              alt="user"
              onChange={changeImage}
            />
            <div className="settings-container-profile-data-container">
              <h3 className="settings-container-profile-data-container-title">
                {name} {surname}
              </h3>
              <p className="settings-container-profile-data-container-email">
                {email}
              </p>
            </div>
          </div>
          <label className="settings-container-profile-change" htmlFor="file">
            Change Photo Profile
          </label>
          <input
            type="file"
            name="file"
            id="file"
            style={{ display: "none" }}
            accept="image/png, image/jpeg"
            onChange={changeImage}
          />
          <button className="settings-container-profile-delete">Delete</button>
        </div>
        <div className="settings-container-personal">
          <form className="settings-container-personal-form">
            <div className="settings-container-personal-form-container">
              <label
                className="settings-container-personal-form-info"
                htmlFor="name"
              >
                First name
              </label>
              <input
                className="settings-container-personal-form-entry"
                type="text"
                placeholder="First name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="settings-container-personal-form-container">
              <label
                className="settings-container-personal-form-info"
                htmlFor="surname"
              >
                Last name
              </label>
              <input
                className="settings-container-personal-form-entry"
                type="text"
                placeholder="Last name"
                id="surname"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
              />
            </div>
            <div className="settings-container-personal-form-container">
              <label
                className="settings-container-personal-form-info"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="settings-container-personal-form-entry"
                type="email"
                placeholder="Email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </form>
        </div>
        <div className="settings-container-crypto">
          <h4 className="settings-container-crypto-content">
            Crypto addresses
          </h4>
          <div className="settings-container-crypto-container">
            <img
              className="settings-container-crypto-container-image"
              src={crypto}
              alt="crypto"
            />
            <img
              className="settings-container-crypto-container-image"
              src={crypto1}
              alt="crypto"
            />
            <img
              className="settings-container-crypto-container-image"
              src={crypto2}
              alt="crypto"
            />
            <img
              className="settings-container-crypto-container-image"
              src={ellipse}
              alt="ellipse"
            />
            <img
              className="settings-container-crypto-container-image"
              src={arrow}
              alt="arrow"
            />
          </div>
          {/* <label htmlFor="date">Date of birth</label>
          <input
            type="date"
            name="date"
            id="date"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          /> */}
        </div>
      </div>
    </div>
  );
}

export default Settings;
