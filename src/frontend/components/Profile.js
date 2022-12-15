import React, {Fragment} from "react";
import {Gallery} from "./Gallery";

export const Profile = () => {
  const currentUser = true

  return (
    <Fragment>
      {currentUser ? (
        <div className="container">
          <header className="jumbotron">
            <h3>
              <strong>{currentUser.username}</strong> Books I like -{" "}
              {currentUser.user.username}
            </h3>
          </header>
          <Gallery />
        </div>
      ):
  (<h1>Not logged in</h1>)}
    </Fragment>
  );
};

