import React, { Component } from "react";
import "./Navbar.css";

import { Link } from "react-router-dom";

export default class Navbar extends Component {
  constructor() {
    super();

    this.state = {
      leftNavItems: [
        {
          text: "Logo",
          to: "/"
        },
        {
          text: "Home",
          to: "/"
        }
      ],
      rightNavItems: [
        {
          text: "Authentication",
          to: "/auth"
        },
        {
          text: "Dashboard",
          to: "/dashboard"
        },
        {
          text: "Sign Up",
          to: "/sign-up"
        }
      ]
    };
  }

  render() {
    let { leftNavItems, rightNavItems } = this.state;

    let leftNavJSX = leftNavItems.map((item, index) => {
      return (
        <Link className="navbar-link" key={index} to={item.to}>
          {item.text}
        </Link>
      );
    });

    let rightNavJSX = rightNavItems.map((item, index) => {
      if (item.text === "Sign Up") {
        return (
          <Link
            className="navbar-link navbar-call-to-action"
            key={index}
            to={item.to}
          >
            {item.text}
          </Link>
        );
      } else {
        return (
          <Link className="navbar-link" key={index} to={item.to}>
            {item.text}
          </Link>
        );
      }
    });

    return (
      <div className="navbar-positioner">
        <div className="navbar-container">
          <div className="navbar-group-left">{leftNavJSX}</div>
          <div className="navbar-group-right">{rightNavJSX}</div>
        </div>
      </div>
    );
  }
}
