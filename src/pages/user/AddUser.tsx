import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InitialState from "../../model/myinterface";

function AddUser() {
  const navigate = useNavigate();
  const initialState = {
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  };

  const [user, setUser] = useState<InitialState>(initialState);

  const { name, username, email, phone, website } = user;

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) {
      alert("Name cannot be empty");
      return;
    }
    if (!username) {
      alert("Username cannot be empty");
      return;
    }
    if (!email) {
      alert("Email cannot be empty");
      return;
    }
    if (!phone) {
      alert("Phone cannot be empty");
      return;
    }

    const user: InitialState = {
      name: name,
      email: email,
      username: username,
      phone: phone,
      website: website,
    };
    await axios.post("http://localhost:5000/users", user);
    navigate({ pathname: "/" });
  };

  return (
    <div className="container">
      <div className="w-75 mx-auto p-5 shadow">
        <h2 className="text-center mb-4">Add User</h2>
        <form onSubmit={(event) => onFormSubmit(event)}>
          <div className="form-group mb-2">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter your full name"
              name="name"
              value={name}
              onChange={(event) => onChangeInput(event)}
            />
          </div>
          <div className="form-group mb-2">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter your username"
              name="username"
              value={username}
              onChange={(event) => onChangeInput(event)}
            />
          </div>
          <div className="form-group mb-2">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter your email"
              name="email"
              value={email}
              onChange={(event) => onChangeInput(event)}
            />
          </div>
          <div className="form-group mb-2">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter your phone number"
              name="phone"
              value={phone}
              onChange={(event) => onChangeInput(event)}
            />
          </div>
          <div className="form-group mb-4">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter your website"
              name="website"
              value={website}
              onChange={(event) => onChangeInput(event)}
            />
          </div>
          <button type="submit" className="btn btn-info text-white col-12">
            Add user
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddUser;
