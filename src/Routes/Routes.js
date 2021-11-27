import React from "react";
import { Route } from "react-router-dom";
import Home from "../Components/Main/Home";

const Routes = () => {
  return (
    <>
      <Route exact path="/" component={Home} />
    </>
  );
};

export default Routes;
