import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import Shieldmaiden from "./images/shieldmaiden-studios.png";
import HIPerformance from "./images/hip-consultancy.png";
import Accidental from "./images/accidental-theatre.png";
import Learning from "./images/bbc-learning.png";
import Homepage from "./images/bbc-homepage.png";
import History from "./images/bbc-history.png";

function Cards() {
  return (
    <div className="cards">
      <h1>Web Development</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={Shieldmaiden}
              text="Shieldmaiden Studios"
              label=""
              path="http://www.shieldmaiden-studios.com"
            />
            <CardItem
              src={HIPerformance}
              text="HIPerformance Consultancy"
              label=""
              path="/services"
            />{" "}
            <CardItem
              src={Accidental}
              text="Accidental Theatre"
              label=""
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={Learning}
              text="BBC Learning"
              label=""
              path="/services"
            />
            <CardItem
              src={Homepage}
              text="BBC Homepage"
              label=""
              path="/products"
            />
            <CardItem
              src={History}
              text="BBC History"
              label=""
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
