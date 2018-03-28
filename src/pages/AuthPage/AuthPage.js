import React, { Component } from "react";

/*---------Components--------*/
import SignUpForm from "../../components/AuthForm/SignUpForm";

export default class AuthPage extends Component {
  render() {
    return (
      <div className="AuthPage-container">
        <SignUpForm />
      </div>
    );
  }
}
