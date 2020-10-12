import React from "react";
import "./PodcastCards.css";
import CardItem from "./CardItem";
import Improv from "./images/wii_podcast_deirdre_ep8.png";
import Mastering from "./images/myc_podcast_icon.png";

function PodcastCards() {
  return (
    <div className="cards">
      <h1>Podcast Producer</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={Improv}
              text="What Is Improv"
              path="https://soundcloud.com/user-816062288"
            />
            <CardItem
              src={Mastering}
              text="Mastering Your Craft"
              path="https://soundcloud.com/user-804207623"
            />{" "}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PodcastCards;
