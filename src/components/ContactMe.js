import React from "react";
import "./ContactMe.css";
import CardItem from "./CardItem";
import Spark from "./images/spark-ar-mask.jpg";

function ContactMe() {
  return (
    <div className="cards">
      <h1>Contact Me</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__item">
            <CardItem
              src={Spark}
              text="cathylouisewalker@gmail.com"
              path="mailto:cathylouisewalker@gmail.com"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
