import React from "react";
import "./App.css";
import axios from "axios";
import { Route, Switch, Redirect } from "react-router-dom";
import { Header } from "./components";
import { UserList, UserRepo } from "./pages";
import { globalEnv } from "./config/env";

function App() {
  axios.defaults.baseURL = globalEnv.API_ENDPOINT;
  axios.defaults.headers.common["Authorization"] = `token ${globalEnv.GITHUB_TOKEN}`;
  axios.defaults.headers.common["accept"] = "application/vnd.github.v3+json";

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Redirect to="/user/1" />
        </Route>
        <Route exact path="/user/:currentPage" component={UserList} />
        <Route exact path="/user/:currentPage/search/:search" component={UserList} />
        <Route exact path="/user/repos/:userId" component={UserRepo} />
      </Switch>
    </>
  );
}

export default App;
