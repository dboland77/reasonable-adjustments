import React, { Fragment } from "react";
import "../styles/Disability.css";

export const Disability = (props) => {
  return (
    <Fragment>
      <li className="cards_item">
        <div className="card">
          <div className="card_image">
            <img src={props.image} alt={`${props.name} logo`} />
          </div>
          <div className="card_content">
            <p className="card_name">{props.name}</p>
            <p className="card_author">{props.author}</p>
          </div>
        </div>
      </li>
    </Fragment>
  );
}

