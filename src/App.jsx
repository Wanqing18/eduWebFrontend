import React from "react";
import "./App.css";
import Header from "./components/header/header.jsx";
import Home from "./components/home/home";
import Programs from "./components/programs/programs.jsx";
import GetStart from "./components/getStart/getStart.jsx";
import LoginRegister from "./components/loginRegister/loginRegister.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="main">
        <Switch>
          {/* <Route path="/">
            <LoginRegister />
          </Route> */}
          <Route path="/">
            <Home />
            <Programs />
            <GetStart />
          </Route>

          {/* <Router exact path="/login">
            <Login />
          </Router> */}
        </Switch>
        {/* <Route path="/login" exact component={Login} /> */}
      </main>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
