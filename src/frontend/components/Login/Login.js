import React, { useState, useRef } from "react";
import {useDispatch} from "react-redux"
import {dblogin } from "../../services/auth.service";
import { useNavigate } from "react-router";
import {login} from "../../reducers/userSlice"

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const form = useRef();
  const checkBtn = useRef();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

      dblogin(username, password).then(
        (response) => {
         navigate("/")
         dispatch(login(response))
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.msg) ||
            error.message ||
            error.toString();

          setLoading(false);
          setMessage(resMessage);
        }
      )
  };

  return (
    <div className="col-md-2 mx-auto">

    <div className="card card-container">
      <img
        src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
        alt="profile-img"
        className="profile-img-card"
        />

      <form onSubmit={handleLogin} ref={form}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            autoFocus
            className="form-control"
            name="username"
            value={username}
            onChange={onChangeUsername}
            validations={[required]}
            />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={password}
            onChange={onChangePassword}
            validations={[required]}
            />
        </div>

        <div className="form-group">
          <button className="btn btn-primary btn-block" disabled={loading}>
            {loading && (
              <span className="spinner-border spinner-border-sm"></span>
              )}
            <span>Login</span>
          </button>
        </div>

        {message && (
          <div className="form-group">
            <div className="alert alert-danger" role="alert">
              {message}
            </div>
          </div>
        )}
        <button style={{ display: "none" }} ref={checkBtn} />
      </form>
    </div>
        </div>
  );
};

