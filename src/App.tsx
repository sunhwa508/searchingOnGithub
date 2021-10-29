import React from "react";
import "./App.css";
import { Header } from "./components";
import { UserList, UserRepo } from "./pages";
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
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
