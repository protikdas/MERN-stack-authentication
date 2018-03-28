import React, { Component } from "react";
import "./Dashboard.css";

export default class Dashboard extends Component {
  render() {
    const { user } = this.props;
    const { name, emailAddress, countryOfBirth } = user;

    return (
      <div className="dashboard-positioner">
        <div className="dashboard-container">
          <div className="dashboard-header">
            <h3 className="dashboard-title">Welcome Back, Registered User</h3>
          </div>
          <div className="dashboard-profile">
            <p className="profile-text">
              Name: <b>{name}</b>
            </p>
            <p className="profile-text">
              Email Address: <b>{emailAddress}</b>
            </p>
            <p className="profile-text">
              Country: <b>{countryOfBirth}</b>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
