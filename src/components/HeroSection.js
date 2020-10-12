import React, { useEffect } from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import Spark from "./images/spark-ar-mask.jpg";

function HeroSection() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="hero-container">
      <h1>About me</h1>
      <p>
        I’ve worked in Web Development since 2006 although have at times,
        through a keen interest in technology and keeping up with the latest of
        what is possible, pursued making games and apps with C#, VR and AR. AR
        is getting increasingly Javascript based, having an even bigger cross
        over with the Web, especially now Web AR is becoming more supported.
      </p>
      <p>
        I started with Dreamweaver and Photoshop and a page full of tables
        within tables. These days it’s VSCode or Brackets and GNU and my
        stylesheets include Flexbox. Responsive websites are the only kind of
        website and Frameworks begin to dominate. So I spend many hours
        researching the pros and cons of which one to use for different types of
        project and brushing up on my syntax for each one. Including for this
        website which is made with React. I find this the most intuitive of the
        Frameworks but continue to learn about Angular and Vue and go further
        into React with React Native
      </p>

      <p>
        I also Produce 2 Podcasts, one on Improv Comedy and one on the
        Psychology of Leadership.
      </p>

      <p>
        If you would like to chat further about my work, request a copy of my CV
        or want to hire me for work you can email me at{" "}
        <a id="email" href="mailto:cathylouisewalker@gmail.com">
          cathylouisewalker@gmail.com
        </a>
      </p>
    </div>
  );
}

export default HeroSection;
