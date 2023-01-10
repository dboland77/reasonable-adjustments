import React, { useState, useEffect } from "react";
import {useSelector} from 'react-redux'
import {getPublicContent} from "../../services/user.service"
import {DisabilityDropdown} from "../Dropdown/DisabilityDropdown"
import {Navbar} from "../Navbar/Navbar"
import {VerticalStepper} from "../VerticalStepper/VerticalStepper"
import {CSVLoader} from "../CSVUploader/CSVUploader"
import { BulkInsertButton } from "../BulkInsertButton";

export const Home = () => {
  const [content, setContent] = useState("");
  const loggedIn = useSelector(state=>state.user.isLoggedIn)
  const admin = useSelector(state=>state.user.admin)
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
    <>
    <Navbar/>
    <VerticalStepper
  steps={[
    { id: 1, label: 'Step 1', completed: true },
    { id: 2, label: 'Step 2', completed: true },
    { id: 3, label: 'Step 3',completed: true },
  ]}
/>

    <div className="container">
      <header>
        <h3>{content}</h3>
        {loggedIn && 
        <>
        <DisabilityDropdown/> 
        <BulkInsertButton/>
        </>
        }
        {admin && <CSVLoader/>}
      </header>
    </div>
    </>
  );
};
