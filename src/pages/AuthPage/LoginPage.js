import React, { Component } from "react";

/*---------Components--------*/
import LoginForm from "../../components/AuthForm/LoginForm";

export default class LoginPage extends Component {
  render() {
    return (
      <div className="AuthPage-container">
        <LoginForm />
      </div>
    );
  }
}
