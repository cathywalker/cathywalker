import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WebDeveloper from "./components/pages/WebDeveloper";
import Podcasts from "./components/pages/Podcasts";
import Contact from "./components/pages/Contact";
import { Link } from "react-router-dom";
import { useRoutes, A } from "hookrouter";

const routes = {
  "/": () => <Home />,
  "/webdeveloper": () => <WebDeveloper />,
  "/podcasts": () => <Podcasts />,
  "/contact": () => <Contact />,
};

function App() {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  const routeResult = useRoutes(routes);
  return (
    // <>
    //   <Router>
    //     <Navbar />
    //     <Switch>
    //       <Route path="/" exact component={Home} />
    //       <Route path="/webdeveloper" component={WebDeveloper} />
    //       <Route path="/podcasts" component={Podcasts} />
    //       <Route path="/contact" component={Contact} />
    //     </Switch>
    //   </Router>
    // </>
    <div className="App">
      <A href="/">Home</A> <br />
      <A href="/webdeveloper">Web Developer</A>
      <br />
      <A href="/contact">Contact</A>
      {routeResult}
    </div>
  );
}

export default App;
