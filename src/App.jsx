import React from "react";
import "./App.css";
import Header from "./components/header/header.jsx";
import Home from "./components/home/home";
import Programs from "./components/programs/programs.jsx";

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <Programs />
      </main>
    </>
  );
};

export default App;
