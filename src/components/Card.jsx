import React from "react";
import { BsThreeDots } from "react-icons/bs";
import "../styles/Card.css";
import { FcBusinessman } from "react-icons/fc";
import { useState } from "react";

const Card = ({ id, title, tags, status }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [readmore, setReadmore] = useState(false);
  const description = readmore ? title : `${title.substring(0, 20)}....`;
  const checkHandler = () => {
    setIsChecked(!isChecked);
  };
  function readmoreHandler() {
    setReadmore(!readmore);
  }
  return (
    <div className="container">
      <div className="cardHeading2" style={{ justifyContent: "space-between" }}>
        <span style={{ textTransform: "uppercase", color: "darkgrey" }}>
          {id}
        </span>

        <div className="image">
          <div>
            <FcBusinessman />
          </div>
        </div>
      </div>

      <div className="title">
        <div className="dist">
          <div>
            <input
              type="checkbox"
              id="scales"
              name="scales"
              checked={isChecked}
              onChange={checkHandler}
            />
            <label for="scales"></label>
          </div>
          <div>{description}</div>
        </div>
        <span className="read-more" onClick={readmoreHandler}>
          {readmore ? `Show Less` : `read more`}
        </span>
      </div>

      <div className="tags">
        <div className="tag">
          <BsThreeDots />
        </div>
        <div className="ma">
          {tags?.map((element, index) => {
            return (
              <div key={index} className="tag">
                <span>⚪</span> {element}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
