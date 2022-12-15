import React, { useState, useEffect } from "react";
import {useSelector} from 'react-redux'
import {getPublicContent} from "../../services/user.service";
import { getLoginState, getAdminState} from "../../reducers/userSlice";
import {DisabilityDropdown} from "../Dropdown/DisabilityDropdown"

export const Home = () => {
  const [content, setContent] = useState("");
  const loggedIn = useSelector(getLoginState)
  const admin = useSelector(getAdminState)
  useEffect(() => {
    loggedIn ? 
    admin ? setContent("Logged In as admin") : setContent("Logged in")
    :
    getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    ) 
    
  }, [loggedIn, admin]);

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>{content}</h3>
        {loggedIn && <DisabilityDropdown/>}
      </header>
    </div>
  );
};
