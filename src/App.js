import React from "react";
import { Switch } from "react-router-dom";
import "./App.css";
import Nav from "./Components/Nav/Nav";
import Routes from "./Routes/Routes";

function App() {
  return (
    <div className="container">
      <Nav />
      <Switch>
        <Routes />
      </Switch>
    </div>
  );
}
export default App;
//onclick={onclick}v
