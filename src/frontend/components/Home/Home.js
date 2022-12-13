import React, { useState, useEffect } from "react";
import {useSelector} from 'react-redux'
import {getPublicContent} from "../../services/user.service";
import { getLoginState } from "../../reducers/userSlice";

export const Home = () => {
  const [content, setContent] = useState("");
  const loggedIn = useSelector(getLoginState)
  
  useEffect(() => {
    loggedIn ? setContent("Logged In")
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
    
  }, []);

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>{content}</h3>
      </header>
    </div>
  );
};
