import React, { useState, useEffect, Fragment } from "react";
import {Book} from "./Book";
import { getDisabilities } from "../services/user.service";
import "../styles/Gallery.css";

export const Gallery = () => {
  const [disabilities, setDisabilites] = useState("");

  useEffect(() => {
    getDisabilities().then(
      (response) => {
        setDisabilites(response.data);
      },
      (error) => {
        const _books =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
        setDisabilites(_books);
      }
    );
  }, []);

  return (
    <Fragment>
      {disabilities && (
        <div className="main">
          <ul className="cards">
            {disabilities.map((gallery) => (
              <Book
                key={gallery.id}
                id={gallery.id}
                name={gallery.Title_DistinctivetitlebookCovertitle_TitleText}
                image={`${process.env.REACT_APP_PREFIX}${gallery.Location}${gallery.Cover_File}`}
                author={gallery.Contributor1_PersonName}
              ></Book>
            ))}
          </ul>
        </div>
      )}
    </Fragment>
  );
}

