import React, { Component } from "react";
import "./App.css";

import { Route, Redirect, Switch } from "react-router-dom";

/*---------Pages--------*/
import HomePage from "./pages/HomePage/HomePage";
import AuthPage from "./pages/AuthPage/AuthPage";
import Dashboard from "./pages/Dashboard/Dashboard";

/*---------Components--------*/
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

class App extends Component {
  constructor() {
    super();

    this.state = {
      isAuthenticated: false,
      user: {
        emailAddress: "protikdas@hotmail.com",
        name: "Protik Das",
        countryOfBirth: "Bangladesh"
      }
    };
  }

  render() {
    const { isAuthenticated, user } = this.state;

    return (
      <div className="App">
        <div className="Page-Wrapper">
          <Switch>
            <Route
              path="/"
              exact
              component={() => {
                return <HomePage />;
              }}
            />
            <Route
              path="/login"
              exact
              component={props => <AuthPage match={props.match} />}
            />
            <Route
              path="/sign-up"
              exact
              component={props => <AuthPage match={props.match} />}
            />
            <Route
              path="/dashboard"
              exact
              component={() =>
                isAuthenticated ? (
                  <Dashboard user={user} />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
          </Switch>
        </div>
        <Navbar isAuthenticated={isAuthenticated} />
        <Footer />
      </div>
    );
  }
}

export default App;
