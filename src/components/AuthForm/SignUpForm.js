import React, { Component } from "react";
import "./AuthForm.css";

export default class SignUpForm extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        name: "",
        country: "",
        emailAddress: "",
        password: "",
        confirmPassword: ""
      },
      errors: {
        nameError: "Please enter your name.",
        countryError: "",
        emailAddressError: "",
        passwordError: "",
        confirmPasswordError: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log("Button Clicked");
    const user = {
      name: this.state.name,
      country: this.state.country
    };
  };

  handleChange = e => {
    this.setState({
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    const {
      name,
      country,
      emailAddress,
      password,
      confirmPassword
    } = this.state.user;

    const {
      nameError,
      countryError,
      emailAddressError,
      passwordError,
      confirmPasswordError
    } = this.state.errors;

    return (
      <div className="SignUpForm-positioner">
        <div className="SignUpForm-container">
          <div className="SignUpForm-header">
            <h3 className="SignUpForm-title">Sign Up</h3>
          </div>
          <div className="SignUpForm-body">
            <form className="SignUpForm" onSubmit={this.handleSubmit}>
              <div className="SignUpForm-input-group">
                <label className="SignUpForm-label" htmlFor="name">
                  Name
                </label>
                <input
                  className="SignUpForm-input"
                  name="name"
                  value={name}
                  placeholder="Enter your name"
                  onChange={this.handleChange}
                />
                <p className="SignUpForm-error">{nameError}</p>
              </div>

              <div className="SignUpForm-input-group">
                <label className="SignUpForm-label" htmlFor="country">
                  Country
                </label>
                <input
                  className="SignUpForm-input"
                  name="country"
                  value={country}
                  placeholder="Enter your country"
                  onChange={this.handleChange}
                />
                <p className="SignUpForm-error">{countryError}</p>
              </div>

              <div className="SignUpForm-input-group">
                <label className="SignUpForm-label" htmlFor="emailAddress">
                  Email Address
                </label>
                <input
                  className="SignUpForm-input"
                  name="emailAddress"
                  value={emailAddress}
                  placeholder="Enter your email address"
                  onChange={this.handleChange}
                />
                <p className="SignUpForm-error">{emailAddressError}</p>
              </div>

              <div className="SignUpForm-input-group">
                <label className="SignUpForm-label" htmlFor="password">
                  Password
                </label>
                <input
                  className="SignUpForm-input"
                  name="password"
                  value={password}
                  type="password"
                  placeholder="Enter your password"
                  onChange={this.handleChange}
                />
                <p className="SignUpForm-error">{passwordError}</p>
              </div>

              <div className="SignUpForm-input-group">
                <label className="SignUpForm-label" htmlFor="confirmPassword">
                  Confirm Password
                </label>
                <input
                  className="SignUpForm-input"
                  name="confirmPassword"
                  value={confirmPassword}
                  type="password"
                  placeholder="Enter your password again"
                  onChange={this.handleChange}
                />
                <p className="SignUpForm-error">{confirmPasswordError}</p>
              </div>
              <button type="submit" className="SignUpForm-button">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
