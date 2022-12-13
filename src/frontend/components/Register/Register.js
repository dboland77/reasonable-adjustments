import React, { useState, useRef } from "react";
import {useDispatch, useSelector} from "react-redux"
import { dbregister } from "../../services/auth.service";
import {toggleAdmin, getAdminState} from "../../reducers/userSlice"

export const Register = (props) => {
  const form = useRef();
  const checkBtn = useRef();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

  const dispatch = useDispatch()
  const admin = useSelector(getAdminState)

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleAdminCheck = (e) => {
        dispatch(toggleAdmin(e.target.checked))
  }
  const handleRegister = (e) => {
    e.preventDefault();
    setMessage("");
    setSuccessful(false);
      dbregister(username, password, password, admin).then(
        (response) => {
          setMessage("Successfully Registered. Please Log in.");
          setSuccessful(true);
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.msg) ||
            error.message ||
            error.toString();

          setMessage(resMessage);
          setSuccessful(false);
        }
      );
  };

  return (
    <div className="col-md-2 mx-auto ">
      <div className="card card-container">
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        />

        <form onSubmit={handleRegister} ref={form}>
          {!successful && (
            <div>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  value={username}
                  onChange={onChangeUsername}
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
                />
              </div>
              <div>
              <label> Admin {" "}</label>
              <input type="checkbox" onChange={handleAdminCheck}/>
              </div>

              <div className="form-group">
                <button className="btn btn-primary btn-block">Sign Up</button>
              </div>
            </div>
          )}

          {message && (
            <div className="form-group">
              <div
                className={
                  successful ? "alert alert-success" : "alert alert-danger"
                }
                role="alert"
              >
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

